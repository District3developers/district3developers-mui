import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}>
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="landing" element={<LandingPage />} />
    </Routes>
  );
};

export default routes;
