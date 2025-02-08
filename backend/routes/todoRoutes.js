import express from "express";

import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  getTodoById,
} from "../controllers/todoController.js";

import authenticateUser from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateUser, createTodo);
router.get("/", authenticateUser, getTodos);
router.get("/:todoId", authenticateUser, getTodoById);
router.put("/:todoId", authenticateUser, updateTodo);
router.delete("/:todoId", authenticateUser, deleteTodo);

export default router;
