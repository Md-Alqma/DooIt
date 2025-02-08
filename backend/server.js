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
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};
app.get("/", (req, res) => {
  res.send(`<h1>DooIt</h1>`);
});

app.post("/api/users/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = new User({
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 8),
  });
  const user = await newUser.save();
  res.json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: generateToken(user),
  });
});

app.post("/api/users/signin", async (req, res) => {
  const { username, password } = req.headers;
  const user = await User.findOne({ username });
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      return res.json({
        message: "User signed in successfully",
        _id: user._id,
        username: username,
        email: user.email,
        token: generateToken(user),
      });
    }
    return res.status(401).json({ message: "Incorrect username or password" });
  }
  res.status(401).json({ message: "Incorrect username or password" });
});

app.post('/api/todo', authenticateUser, )

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
