import { Outlet } from "react-router-dom";
import { Home } from "../pages";

const Root = () => {
  return (
    <div>
      <Outlet />
      <Home />
    </div>
  );
};

export default Root;
