import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/login/Login";
import CourseListing from "../pages/CourseListing/CourseListing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/courses",
        Component: CourseListing,
      },
    ],
  },
]);
