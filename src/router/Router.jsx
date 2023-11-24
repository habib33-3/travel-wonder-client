import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import { Home, Register } from "../pages";

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
    ],
  },
]);

export default router;
