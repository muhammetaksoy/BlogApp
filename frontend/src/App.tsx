import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Blogs from "./components/Admin/Blogs/Blogs";
import { About } from "./components/User/About/About";
import Contact from "./components/User/Contact/Contact";
import Login from "./Shared/Components/Login/Login";
import HomePage from "./components/User/HomePage/HomePage";
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
        <Route path="HomePage" element={<HomePage />}/>
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
