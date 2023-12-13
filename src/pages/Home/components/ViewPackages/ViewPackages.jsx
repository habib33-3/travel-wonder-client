import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";
import useTours from "../../../../hooks/useTours/useTours";
import PackageCard from "../../../../components/PackageCard/PackageCard";
import PageTitle from "../../../../shared/PageTitle/PageTitle";

const ViewPackages = () => {
  const { tours, isLoading } = useTours();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ mt: 10 }}>
      <PageTitle title={" Our Packages"} />

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
