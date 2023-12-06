import { Box, Container, CssBaseline, Grid } from "@mui/material";
import PageTitle from "../../shared/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import useTours from "../../hooks/useTours/useTours";
import useCategories from "../../hooks/useCategories/useCategories";
import Loader from "../../components/Loader/Loader";
import PackageCard from "../../components/PackageCard/PackageCard";

const PackageCategory = () => {
  const { categoryId } = useParams();
  const { tours, isLoading } = useTours();
  const { categories } = useCategories();

  if (isLoading) {
    return <Loader />;
  }

  const category = categories?.find(
    (category) => category.categoryId == categoryId
  );

  const categoryName = category.name;

  const packages = tours.filter((data) => data.categoryId == categoryId);

  return (
    <Box>
      <PageTitle title={categoryName} />
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
            {packages.map((tour) => (
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

export default PackageCategory;
