import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllPackages from "../pages/AllPackages/AllPackages";
import PackageCategory from "../pages/PackageCategory/PackageCategory";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import GuideDetails from "../pages/GuideDetails/GuideDetails";
import Blogs from "../pages/Blogs/Blogs";
import Blog from "../pages/Blog/Blog";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../layout/Dashboard/Dashboard";
import AdminRouter from "./AdminRouter";
import ManageUsers from "../pages/Dashboard/AdminPages/ManageUsers/ManageUsers";
import AddPackage from "../pages/Dashboard/AdminPages/AddPackage/AddPackage";
import AdminProfile from "../pages/Dashboard/AdminPages/AdminProfile/AdminProfile";
import GuideRouter from "./GuideRouter";
import GuideProfile from "../pages/Dashboard/GuidePages/GuideProfile/GuideProfile";
import ManageBooking from "../pages/Dashboard/GuidePages/ManageBooking/ManageBooking";
import UserBookings from "../pages/Dashboard/UserPages/UserBookings/UserBookings";
import UserWishlist from "../pages/Dashboard/UserPages/UserWishlist/UserWishlist";
import UserProfile from "../pages/Dashboard/UserPages/UserProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "allPackages",
        element: <AllPackages />,
      },

      {
        path: "packages/:categoryId",
        element: <PackageCategory />,
      },

      {
        path: "package/:id",
        element: <PackageDetails />,
      },

      {
        path: "guide/:id",
        element: <GuideDetails />,
      },

      {
        path: "blogs",
        element: <Blogs />,
      },

      {
        path: "blog/:id",
        element: <Blog />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      // admin routes

      {
        path: "manageUsers",
        element: (
          <AdminRouter>
            <ManageUsers />
          </AdminRouter>
        ),
      },

      {
        path: "addPackage",
        element: (
          <AdminRouter>
            <AddPackage />
          </AdminRouter>
        ),
      },

      {
        path: "adminProfile",
        element: (
          <AdminRouter>
            <AdminProfile />
          </AdminRouter>
        ),
      },

      // guide router
      {
        path: "guideProfile",
        element: (
          <GuideRouter>
            <GuideProfile />
          </GuideRouter>
        ),
      },

      {
        path: "myTours",
        element: (
          <GuideRouter>
            <ManageBooking />
          </GuideRouter>
        ),
      },

      // user routes
      {
        path: "usersBookings",
        element: <UserBookings />,
      },

      {
        path: "usersWishList",
        element: <UserWishlist />,
      },

      {
        path: "userProfile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
