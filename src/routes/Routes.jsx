import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
