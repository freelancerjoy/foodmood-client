import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Recipe from "../Pages/Shared/ChefCard/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "recipe/:id",
        element: <Recipe></Recipe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipe/${params.id}`),
      },
    ],
  },
]);

export default router;
