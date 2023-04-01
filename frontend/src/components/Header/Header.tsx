import React, { useEffect, useState } from "react";
import {NavLink } from "react-router-dom";
import {
  TbSelect,
  TbCircleX,
  TbArticle,
  TbMailForward,
  TbHome2,
  TbLogin,
  TbLogout,
} from "react-icons/tb";
import { FaUser } from "react-icons/fa";
function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      label: "Anasayfa",
      url: "/HomePage",
      hide: false,
      icon: <TbHome2 />,
    },
    {
      label: "Hakkımda",
      url: "/about",
      hide: false,
      icon: <FaUser />,
    },
    {
      label: "Bloglar",
      url: "/blogs",
      hide: false,
      icon: <TbArticle />,
    },
    {
      label: "İletişim",
      url: "/contact",
      hide: false,
      icon: <TbMailForward />,
    },
    { label: "Giriş", url: "/login", hide: true, icon: <TbLogin /> },
    { label: "Çıkış", url: "/register", hide: true, icon: <TbLogout /> },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(true);
      }else{
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 sm:w-1/2 mx-auto ">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <h1 className="text-gray-600 font-bold">Logo</h1>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className=" text-gray-600"
          >
            {isOpen ? <TbCircleX /> : <TbSelect />}
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } px-2 pt-2 pb-4 flex flex-col justify-center items-center sm:flex-row sm:p-0`}
      >
        {menuItems.map((item, index) => (
          <NavLink
            to={item.url}
            key={index}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "#4299e1" : "",
                color: isActive ? "#fff" : "",
                borderRadius: isActive ? "5px": ""
              };
            }}
            className={`px-5 py-2 font-medium text-gray-500 hover:text-blue-500 ${
            item.hide ? "hidden" : "block"
          }`}
          >
            <div>
              <span className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
            </div>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
