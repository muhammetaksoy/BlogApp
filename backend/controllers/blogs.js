import Blog from "../models/blogs.js";
import Category from "../models/categories.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("category comments");
    res.status(200).json({
      data: blogs,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id).populate("category comment", "name");

    if (!blog) {
      res.status(404).json({
        success: false,
        message: "blog bulunamadı",
      });
    } else {
      blog.viewCount++;
      await blog.save();
      res.status(200).json(blog);
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const newPost = new Blog(req.body);
    await newPost.save();

    if(req.body.category){
      const category=await Category.findById(req.body.category);
      category.blogCount++;
      await category.save()
    }

    res.status(200).json({
      success: true,
      message: "blog başarılı bir şekilde eklendi",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  const id = req.body._id;
  const blog = {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
  };
  try {
    await Blog.findByIdAndUpdate(id, blog, { new: true });
    res.json({
      success: true,
      message: "blog başarılı bir şekilde güncellendi",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  const id = req.body._id;
  try {
    await Blog.findByIdAndRemove(id);
    res.json({
      success: true,
      message: "blog başarılı bir şekilde silindi",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
