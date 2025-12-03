import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/login/Login";
import CourseListing from "../pages/CourseListing/CourseListing";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Payment from "../pages/Payment/Payment";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "courses",
        Component: CourseListing,
      },
      {
        path: "courses/:id",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },

  // page not found page
  {
    path: "*",
    Component: PageNotFound,
  },
]);
