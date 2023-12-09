import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import Loader from "../components/Loader/Loader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
