import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout/AdminLayout";
import Blogs from "./Components/Admin/Blogs/Blogs";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import PageNotFound from "./Shared/Components/PageNotFound/PageNotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Admin" element={<AdminLayout />}>
          <Route path="/Admin" element={<Navigate to="Dashboard"/>}/>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="*" element={<Navigate to="Dashboard" replace />} />
        </Route>

        <Route path="/" element={<Navigate to="HomePage"/>}/>
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
