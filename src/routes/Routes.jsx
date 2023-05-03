import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Recipe from "../Pages/Shared/ChefCard/Recipe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ErrorPage from "../Pages/errorpage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "recipe/:id",
        element: <Recipe></Recipe>,
        loader: ({ params }) =>
          fetch(
            `https://food-mood-server-freelancerjoy.vercel.app/recipe/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
