import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/HomePage/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
