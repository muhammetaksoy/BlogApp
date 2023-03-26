import Comment from "../models/comments.js";
import Blog from "../models/blogs.js";



export const createComment = async (req, res) => {
  const blog=req.body.blog;
    try {
      const newComment = new Comment({
        text:req.body.text,
        blog:blog
      });
      await newComment.save();

      const blogRelated = await Blog.findById(blog);
      // push the comment into the post.comments array
      blogRelated.comments.push(newComment);
      // save 
      await blogRelated.save();


      res.status(200).json({
        success: true,
        message: "yorum başarılı bir şekilde eklendi",
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  };
