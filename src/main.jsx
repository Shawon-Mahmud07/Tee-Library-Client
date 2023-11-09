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
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Explore from "./components/layout/Explore";
import AllBooks from "./Pages/AllBooks";
import Update from "./Pages/Update";
import DetailsBook from "./Pages/DetailsBook";
import ReadBook from "./Pages/ReadBook";
import BorrowedBooks from "./Pages/BorrowedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://tee-library-server.vercel.app/categories"),
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
        element: (
          <PrivetRoute>
            <AddBooks></AddBooks>
          </PrivetRoute>
        ),
      },
      {
        path: "/explore/:category",
        element: (
          <PrivetRoute>
            <Explore></Explore>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tee-library-server.vercel.app/explore/${params.category}`
          ),
      },
      {
        path: "/all-books",
        element: (
          <PrivetRoute>
            <AllBooks></AllBooks>
          </PrivetRoute>
        ),
        loader: () => fetch("https://tee-library-server.vercel.app/all-books"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <Update></Update>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tee-library-server.vercel.app/explore/id/${params.id}`
          ),
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivetRoute>
            <DetailsBook></DetailsBook>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tee-library-server.vercel.app/explore/id/${params.id}`
          ),
      },
      {
        path: "/read-book/:name",
        element: <ReadBook></ReadBook>,
        loader: ({ params }) =>
          fetch(
            `https://tee-library-server.vercel.app/read-book/${params.name}`
          ),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivetRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivetRoute>
        ),
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
