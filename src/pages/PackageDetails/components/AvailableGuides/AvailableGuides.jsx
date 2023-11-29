import { Box, Grid, Typography } from "@mui/material";
import { useGuideData } from "../../../../hooks";
import { Loader } from "../../../../components";

import { Link } from "react-router-dom";

const AvailableGuides = () => {
  const { guides, isLoading } = useGuideData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ my: 5 }}>
      <Typography
        variant="h5"
        textAlign={"center"}
      >
        Available Guides
      </Typography>
      <Box>
        <Grid
          container
          columns={{ xs: 1, md: 3 }}
          gap={10}
          sx={{ mt: 5 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {guides.map((guide) => (
            <Box key={guide._id}>
              <Link to={`/guide/${guide._id}`}>
                <Box>
                  <Box
                    component={"img"}
                    src={guide.pic}
                    sx={{ borderRadius: "50%" }}
                    height="80px"
                    width="80px"
                  />

                  <Typography
                    textAlign={"center"}
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "700",
                      my: 1,
                    }}
                    variant="body1"
                  >
                    {guide.name}
                  </Typography>
                </Box>
              </Link>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AvailableGuides;
