import express from "express";
import {
  getBlogs,
  getSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogs.js";

const router = express.Router();

router.get("/getBlogs", getBlogs);
router.post("/createBlog", createBlog);
router.post("/updateBlog", updateBlog);
router.post("/deleteBlog", deleteBlog);
router.get("/getSingleBlog/:id", getSingleBlog);


export default router;
