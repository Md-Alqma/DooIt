import express, { application } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.SECRET_KEY;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
});

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed", "archived"],
    default: "pending",
    required: true,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high", "urgent"],
    default: "medium",
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todoSchema);

const generateToken = (user) => {
  const payload = { username: user.username, email: user.email, _id: user._id };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" });
};

const authenticateUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res
            .status(401)
            .json({ message: "Token expired, please login again." });
        }
        return res.status(403).json({ message: "Invalid token." });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

app.post("/api/users/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this username or email already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username.toLowerCase(),
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/users/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user);
    res.json({
      message: "User signed in successfully",
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/todos", authenticateUser, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { title, description, status, priority } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTodo = new Todo({
      title: title,
      description: description,
      status: status || "pending",
      priority: priority || "medium",
      user: req.user._id,
    });
    await newTodo.save();
    user.todos.push(newTodo._id);
    await user.save();

    res
      .status(201)
      .json({ message: "Todo created successfully", todo: newTodo });
  } catch (error) {
    res.status(500).json({ message: "Inernal server error" });
  }
});

app.get("/api/todos", authenticateUser, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/api/todos/:todoId", authenticateUser, async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      { _id: req.params.todoId, user: req.user._id },
      req.body,
      {
        new: true,
      }
    );
    if (!todo) {
      return res.status(404).json({ message: "No todo found" });
    }

    res.json({ message: "Todo updated successfully", todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/todos/:todoId", authenticateUser, async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete({
      _id: req.params.todoId,
      user: req.user._id,
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await User.findByIdAndUpdate(req.user._id, {
      $pull: { todos: req.params.todoId },
    });
    
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
try {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.log("DB Connection Error: " + err));
  app.listen(PORT, () => {
    console.log("listening on port " + PORT);
  });
} catch (error) {
  console.error(error);
}
