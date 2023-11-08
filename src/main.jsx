import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/main layout/Root";
import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "./index.css";
import AuthProviders from "./Providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import AddBooks from "./components/layout/AddBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-books",
        element: <AddBooks></AddBooks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProviders>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
