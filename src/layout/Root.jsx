import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../shared";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
