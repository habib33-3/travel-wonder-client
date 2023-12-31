import { Box, Container, CssBaseline, Grid } from "@mui/material";
import useTours from "../../hooks/useTours/useTours";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../shared/PageTitle/PageTitle";
import PackageCard from "../../components/PackageCard/PackageCard";


const AllPackages = () => {
  const { tours, isLoading } = useTours();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <PageTitle title={"All Packages"} />
      <Container>
        <CssBaseline />
        <Box sx={{ mt: "10px" }}>
          <Grid
            container
            gap={5}
            alignItems={"center"}
            justifyContent={"center"}
            columns={{ xs: 1, md: 3, lg: 4 }}
          >
            {tours.map((tour) => (
              <PackageCard
                key={tour._id}
                tour={tour}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AllPackages;
