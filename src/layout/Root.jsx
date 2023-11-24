import { Outlet } from "react-router-dom";
import { Home } from "../pages";
import { Navbar } from "../shared";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Home />
    </div>
  );
};

export default Root;
