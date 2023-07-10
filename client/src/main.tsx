import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMovie from "./pages/AddMovie";
import Admin from "./pages/Admin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "addMovie",
    element: <AddMovie />
  },
  {
    path: "admin",
    element: <Admin />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
