import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../Components/Admin/SideNav/SideNav";

const AdminLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <SideNav />
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
