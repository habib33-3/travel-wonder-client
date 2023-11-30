import { Box, Typography } from "@mui/material";

const Overview = () => {
  return (
    <Box>
      <Typography
        textAlign={"center"}
        variant="h4"
        color="blue"
      >
        Make Your Vacation More Exciting
      </Typography>
      <Box>
        <Typography
          variant="h5"
          color="violet"
          textAlign={"center"}
          sx={{ my: 4 }}
        >
          With various packages and Professional guides
        </Typography>
      </Box>
    </Box>
  );
};

export default Overview;
