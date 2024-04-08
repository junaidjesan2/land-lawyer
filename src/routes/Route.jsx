import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PublicLayout from "../Layout/PublicLayout";
import SignIn from "../pages/authentication/SignIn";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/authentication/SignUp";
import StyleContext from "../context/StyleContext";
import LandDetails from "../pages/LandDetails";

export const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <StyleContext>
        <PublicLayout></PublicLayout>,
      </StyleContext>
    ),
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("../../public/datas/Data.json"),
      },
      {
        path: "/land/:id",
        element: <LandDetails></LandDetails>,
        loader: () => fetch("../../public/datas/Data.json"),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
