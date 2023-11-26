import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import { ErrorPage, Home, Login, Register } from "../pages";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";
import { ManageUsers } from "../pages/Dashboard/AdminPages";

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
    ],
  },
]);

export default router;
