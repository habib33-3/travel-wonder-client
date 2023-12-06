import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import useGuide from "../hooks/useGuide/useGuide";
import Loader from "../components/Loader/Loader";

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
