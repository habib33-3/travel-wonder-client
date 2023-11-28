import PropTypes from "prop-types";
import { useAuth, useGuide } from "../hooks";
import { Loader } from "../components";
import { Navigate } from "react-router-dom";

const GuideRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const { isGuide, isLoading } = useGuide();

  if (loading || isLoading) {
    return <Loader />;
  }

  if (user && isGuide) {
    return children;
  }

  return <Navigate to="/login" />;
};

GuideRouter.propTypes = {
  children: PropTypes.node,
};

export default GuideRouter;
