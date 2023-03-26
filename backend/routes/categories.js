import express from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";

const router = express.Router();

router.get("/getCategories", getCategories);
router.post("/createCategory", createCategory);
router.post("/updateCategory/:id", updateCategory);
router.post("/deleteCategory/:id", deleteCategory);

export default router;
