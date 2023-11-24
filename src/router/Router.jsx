import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import { Home, Login, Register } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
]);

export default router;
