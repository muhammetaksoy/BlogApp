import express from "express";
import { createComment } from "../controllers/comments.js";

const router = express.Router();

router.post("/createComment", createComment);

export default router;
