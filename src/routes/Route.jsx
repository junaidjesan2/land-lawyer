import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PublicLayout from "../Layout/PublicLayout";

export const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout></PublicLayout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
    ],
  },
]);
