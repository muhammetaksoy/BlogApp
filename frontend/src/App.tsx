import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout/AdminLayout";
import Blogs from "./Components/Admin/Blogs/Blogs";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import PageNotFound from "./Shared/Components/PageNotFound/PageNotFound";
import HomePage from "./Components/HomePage/HomePage";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Admin" element={<AdminLayout />}>
          <Route path="/Admin" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="*" element={<Navigate to="Dashboard" replace />} />
        </Route>

        <Route path="/" element={<Navigate to="HomePage" />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
