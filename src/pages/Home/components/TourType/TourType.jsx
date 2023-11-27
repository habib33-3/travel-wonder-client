import { Box, Button, Container, Typography } from "@mui/material";
import { PageTitle } from "../../../../shared";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCategories } from "../../../../hooks";
import { Loader } from "../../../../component";

const TourType = () => {
  const { categories, isLoading } = useCategories();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <PageTitle title={"Tour Type"} />

      <Container>
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.categoryId}>
              <Box
                sx={{
                  backgroundImage: `url(${category.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={3}
                >
                  <Typography
                    variant="h3"
                    component={"h2"}
                    sx={{ color: "aquamarine" }}
                  >
                    {category.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    component={"h4"}
                    sx={{ color: "white" }}
                  >
                    {category.tagline}
                  </Typography>
                  <Button
                    variant="contained"
                    color="info"
                  >
                    View Packages
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default TourType;
