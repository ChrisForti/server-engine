import { Router } from "express";
import { todo } from "../controllers/todo-controller.js";

const router = Router();

// Routes here start with /ping
router.get("/todo", todo);

export default router;