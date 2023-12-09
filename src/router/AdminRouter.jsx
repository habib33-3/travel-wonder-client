import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import Loader from "../components/Loader/Loader";
import useAdmin from "../hooks/useAdmin/useAdmin";

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
