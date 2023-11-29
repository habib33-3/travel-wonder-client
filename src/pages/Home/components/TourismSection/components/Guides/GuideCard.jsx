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
        height={"200px"}
        width={"150px"}
        sx={{ backgroundColor: "#F5F5F5", px: 2, py: 1, mt: 1 }}
      >
        <Box
          component={"img"}
          src={pic}
          sx={{ borderRadius: "50%" }}
          height="80px"
          width="80px"
        />

        <Typography
          sx={{ textTransform: "capitalize", fontWeight: "700" }}
          variant="body1"
        >
          {name}
        </Typography>

        <Button
          variant="contained"
          color="info"
          sx={{
            ":active": {
              transform: "scale(.95)",
            },
          }}
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
