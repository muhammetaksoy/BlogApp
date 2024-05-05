import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose, MdHome, MdLibraryBooks, MdMail, MdInput, MdExitToApp } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Anasayfa", url: "/HomePage", icon: <MdHome />, hide: false },
    { label: "Bloglar", url: "/blogs", icon: <MdLibraryBooks />, hide: false },
    { label: "İletişim", url: "/contact", icon: <MdMail />, hide: false },
    { label: "Giriş", url: "/login", icon: <MdInput />, hide: true },
    { label: "Çıkış", url: "/register", icon: <MdExitToApp />, hide: true },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="p-6">
      <div className="flex items-center justify-between container mx-auto">
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-sky-700 focus:outline-none"
          >
            {isOpen ? <MdClose size="28px" /> : <MdMenu size="28px" />}
          </button>
        </div>
        <nav className="hidden sm:flex sm:items-center sm:justify-center mx-auto container  sm:ml-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              className="text-sky-600 font-semibold hover:text-gray-300 mx-5 sm:flex sm:items-center"
              onClick={closeMenu}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      {isOpen && (
        <nav className="sm:hidden">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              className="text-sky-600 font-semibold hover:text-gray-300 py-3 flex items-center"
              onClick={closeMenu}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
