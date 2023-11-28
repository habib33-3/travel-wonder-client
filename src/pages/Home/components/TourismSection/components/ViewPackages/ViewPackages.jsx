import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useTours } from "../../../../../../hooks";
import { Loader, PackageCard } from "../../../../../../components";
import { Link } from "react-router-dom";

const ViewPackages = () => {
  const { tours, isLoading } = useTours();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Typography
        textAlign={"center"}
        variant="h4"
      >
        Our Packages
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Grid
          container
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
          columns={{ xs: 1, md: 3 }}
        >
          {tours.slice(0, 3).map((tour) => (
            <PackageCard
              key={tour._id}
              tour={tour}
            />
          ))}
        </Grid>

        <Stack
          alignItems={"center"}
          sx={{ mt: 7 }}
        >
          <Button
            variant="contained"
            color="info"
            LinkComponent={Link}
            to={"/allPackages"}
          >
            All Packages
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ViewPackages;
