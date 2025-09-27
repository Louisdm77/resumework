import React from "react";
import { Router, createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home";
import About from "./src/pages/about";
import Testimonials from "./src/pages/testimonials";
import FAQ from "./src/pages/faq";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/faq", element: <FAQ /> },
]);
export default router;
