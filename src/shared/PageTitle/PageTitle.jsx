import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return (
    <Typography
      variant="h3"
      component={"h1"}
      align="center"
      gutterBottom
      sx={{
        mt: 5,
        fontWeight: 700,
        background: `-webkit-linear-gradient(45deg, #2980B9, #6E45E2)`,
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {title}
    </Typography>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
