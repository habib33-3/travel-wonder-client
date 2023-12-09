import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import Loader from "../components/Loader/Loader";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

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
