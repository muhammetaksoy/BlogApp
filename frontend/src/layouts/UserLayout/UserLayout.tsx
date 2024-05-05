import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/User/Header/Header";

const UserLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default UserLayout;
