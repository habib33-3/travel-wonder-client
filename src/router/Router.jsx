import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import {
  AllPackages,
  ErrorPage,
  Home,
  Login,
  PackageCategory,
  Register,
} from "../pages";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";
import { AddPackage, ManageUsers } from "../pages/Dashboard/AdminPages";

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
    ],
  },
]);

export default router;
