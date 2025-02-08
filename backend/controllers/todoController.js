import Todo from "../models/Todo.js";
import User from "../models/User.js";

export const createTodo = async (req, res) => {
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
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.todoId,
      user: req.user._id,
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTodo = async (req, res) => {
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
};

export const deleteTodo = async (req, res) => {
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
};
