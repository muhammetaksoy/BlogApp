import React from "react";
import { useNavigate } from "react-router-dom";

const ArticlesPage = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blogId:number) => {
    navigate(`/blogs/${blogId}`);
  };



  const blogs = [
    {
      id: 1,
      title: "Html nedir ?",
      category: "Html",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "22 Mayıs 2023",
      views: 125,
    },
    {
      id: 2,
      title: "Blog Başlığı 2",
      category: "Css",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "15 Nisan 2023",
      views: 78,
    },
    {
      id: 3,
      title: "Blog Başlığı 3",
      category: "Javascript",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "3 Mart 2023",
      views: 210,
    },
    {
      id: 4,
      title: "Blog Başlığı 4",
      category: "Javascript",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "12 Şubat 2023",
      views: 92,
    },
    {
      id: 5,
      title: "Blog Başlığı 4",
      category: "Angular",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "12 Şubat 2023",
      views: 92,
    },
  ];

  return (
    <div className="container mx-auto w-3/4 mt-8">      
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg p-4 border border-gray-400 hover:cursor-pointer hover:border-sky-600"
              onClick={() => handleBlogClick(blog.id)}
            >
              <h3 className="text-lg font-bold mb-2 text-gray-300">
                {blog.title}
              </h3>
              <span className="text-sky-600 font-bold text-sm inline-block mb-2">
                {blog.category}
              </span>
              <p className="text-gray-400">
                {blog.content.length > 150
                  ? blog.content.slice(0, 150) + "..."
                  : blog.content}
              </p>
              <div className="flex justify-between mt-4">
                <span className="text-gray-500">{blog.date}</span>
                <span className="text-gray-500 font-medium text-sm ml-2">
                  Okunma: {blog.views}
                </span>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ArticlesPage;
