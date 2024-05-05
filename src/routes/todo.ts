import { Router } from "express";
import { todo } from "../controllers/todo-controller.js";

const router = Router();

// Routes here start with /todo
router.get("/", todo);

export default router;