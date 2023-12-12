import { Box, Container, Stack, Typography } from "@mui/material";
import Loader from "../../../components/Loader/Loader";
import useReview from "../../../hooks/useReview/useReview";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";

const Reviews = ({ guideEmail }) => {
  const { reviews, isLoading, refetch } = useReview(guideEmail);

  useEffect(() => {
    refetch();
  }, [refetch, reviews]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ mt: "40px" }}>
      <Container>
        <Typography
          textAlign={"center"}
          color={"blue"}
          component={"h1"}
          variant="h2"
        >
          Review
        </Typography>
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <Stack
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"20px"}
                sx={{
                  backgroundColor: "aliceblue",
                  width: "80%",
                  mx: "auto",
                  px: 4,
                  py: 6,
                }}
              >
                <Box
                  component={"img"}
                  height={"40px"}
                  width={"40px"}
                  src={review.userPic}
                  sx={{ borderRadius: "50%" }}
                />
                <Typography
                  textAlign={"center"}
                  variant="h5"
                  component={"h2"}
                  color={"purple"}
                >
                  {review.userName}
                </Typography>
                <Typography
                  textAlign={"center"}
                  variant="body1"
                  component={"h2"}
                  color={"black"}
                >
                  {'"'}
                  {review.reviewText}
                  {'"'}
                </Typography>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

Reviews.propTypes = {
  guideEmail: PropTypes.string,
};

export default Reviews;
