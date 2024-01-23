import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home.jsx";
import Tweets from "./Pages/Tweets/Tweets.jsx";
import User from "./Pages/User/User.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/tweets",
    element: <Tweets />
  },
  {
    path: "/users",
    element: <User />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
