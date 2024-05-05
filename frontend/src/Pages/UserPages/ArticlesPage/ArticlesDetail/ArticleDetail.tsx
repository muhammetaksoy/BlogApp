import {
  FaArrowLeft,
  FaCalendarAlt,
  FaEye,
  FaFolder,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();

  // Mockup blog verileri
  const blogs = [
    {
      id: 1,
      title: "Html nedir ?",
      category: "Html",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "22 Mayıs 2023",
      views: 125,
    },
    {
      id: 2,
      title: "Blog Başlığı 2",
      category: "Css",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "15 Nisan 2023",
      views: 78,
    },
    {
      id: 3,
      title: "Blog Başlığı 3",
      category: "Javascript",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "3 Mart 2023",
      views: 210,
    },
    {
      id: 4,
      title: "Blog Başlığı 4",
      category: "Javascript",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "12 Şubat 2023",
      views: 92,
    },
    {
      id: 5,
      title: "Blog Başlığı 4",
      category: "Angular",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus eu ante consectetur ullamcorper.",
      date: "12 Şubat 2023",
      views: 92,
    },
  ];

  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div className="text-center text-white">Blog bulunamadı.</div>;
  }

  return (
    <div className="container mx-auto my-8 px-3">
      <div className="max-w-4xl mx-auto border border-white p-5 rounded-lg shadow-lg ">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-300">
          {blog.title}
        </h2>
        <div className="flex flex-col sm:flex-row items-center mb-4">
          <span className="text-sky-900 font-bold bg-gray-300 px-3 py-1 rounded-lg text-xs mt-2 flex items-center">
            <FaFolder className="mr-2" />
            {blog.category}
          </span>
          <span className="text-sky-900 font-bold bg-gray-300 px-3 py-1 rounded-lg text-xs ml-2 mt-2 flex items-center">
            <FaCalendarAlt className="mr-2" />
            {blog.date}
          </span>
          <span className="text-sky-900 font-bold bg-gray-300 px-3 py-1 rounded-lg text-xs ml-2 mt-2 flex items-center">
            <FaEye className="mr-2" />
            {blog.views}
          </span>
        </div>
        <p className="text-gray-400 my-4">{blog.content}</p>
        <div className="flex justify-center">
          <Link
            to="/blogs"
            className="inline-flex items-center bg-sky-900 text-white font-semibold py-2 px-4 rounded transition duration-300 text-sm"
          >
            <FaArrowLeft className="mr-2" />
            Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
