import { Box, Button, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

const GuideCard = ({ guide }) => {
  const { name, pic, _id } = guide;

  return (
    <Grid item>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        flexDirection={"column"}
      >
        <Box
          component={"img"}
          src={pic}
          sx={{ borderRadius: "50%" }}
          height="80px"
          width="80px"
        />
        <Typography variant="body1">{name}</Typography>

        <Button
          variant="contained"
          color="info"
        >
          Details
        </Button>
      </Box>
    </Grid>
  );
};

GuideCard.propTypes = {
  guide: PropTypes.object,
};

export default GuideCard;
