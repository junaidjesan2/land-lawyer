import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PublicLayout from "../Layout/PublicLayout";
import SignIn from "../pages/authentication/SignIn";
import NotFound from "../pages/NotFound";

export const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout></PublicLayout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      },
    ],
  },
]);
