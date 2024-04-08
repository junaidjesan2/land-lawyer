import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PageRouter } from "./routes/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={PageRouter}></RouterProvider>
    </AuthContext>
  </React.StrictMode>
);
