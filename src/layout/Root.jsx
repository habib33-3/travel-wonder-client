import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../shared";
import { useAuth } from "../hooks";
import { Loader } from "../components";

const Root = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
