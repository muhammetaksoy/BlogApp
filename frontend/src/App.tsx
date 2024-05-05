import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout/AdminLayout";
import Blogs from "./Components/Admin/Blogs/Blogs";
import Articles from "./Pages/UserPages/ArticlesPage/ArticlesPage";
import Dashboard from "./Pages/AdminPages/DashboardPage/Dashboard";
import Contact from "./Pages/UserPages/ContactPage/Contact";
import Login from "./Components/Admin/Login/Login";
import PageNotFound from "./Shared/Components/PageNotFound/PageNotFound";
import HomePage from "./Pages/UserPages/HomePage/HomePage";
import UserLayout from "./Layouts/UserLayout/UserLayout";
import ArticleDetail from "./Pages/UserPages/ArticlesPage/ArticlesDetail/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<AdminLayout />}>
          <Route path="/Admin" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="*" element={<Navigate to="Dashboard" replace />} />
        </Route>

        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Navigate to="HomePage" />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="Blogs" element={<Articles />} />
          <Route path="Blogs/:id" element={<ArticleDetail/>} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="Login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
