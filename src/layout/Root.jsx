import { Outlet } from "react-router-dom";
import { Navbar } from "../shared";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
