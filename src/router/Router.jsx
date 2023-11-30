import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import {
  AllPackages,
  ErrorPage,
  GuideDetails,
  Home,
  Login,
  PackageCategory,
  PackageDetails,
  Register,
} from "../pages";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";
import {
  AddPackage,
  AdminProfile,
  ManageUsers,
} from "../pages/Dashboard/AdminPages";
import GuideRouter from "./GuideRouter";
import { GuideProfile, ManageBooking } from "../pages/Dashboard/GuidePages";
import {
  UserBookings,
  UserProfile,
  UserWishlist,
} from "../pages/Dashboard/UserPages";

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
