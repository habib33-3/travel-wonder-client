import PropTypes from "prop-types";
import { useAdmin, useAuth } from "../hooks";
import { Loader } from "../components";
import { Navigate } from "react-router-dom";

const AdminRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isLoading } = useAdmin();

  if (loading || isLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" />;
};

AdminRouter.propTypes = {
  children: PropTypes.node,
};

export default AdminRouter;
