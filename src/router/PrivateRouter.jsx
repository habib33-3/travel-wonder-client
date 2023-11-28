import PropTypes from "prop-types";
import { useAuth } from "../hooks";
import { Loader } from "../components";
import { Navigate } from "react-router-dom";

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
