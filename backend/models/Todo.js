import mongoose from "mongoose";

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

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
