import { Box, Container, Stack, Typography } from "@mui/material";
import img1 from "../../../../assets/banner/beach.jpg";
import img2 from "../../../../assets/banner/sundarban.jpg";
import img3 from "../../../../assets/banner/sylhet.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: img1, // Assuming img1 represents a blue sea background
      title: "Seaside Serenity",
      text: "Where waves whisper tales of tranquility, and golden sands cradle moments of serenity",
      headingColor: "#e67e22", // Orange color for readability on the sea
      textColor: "#ffffff", // White text for better visibility on the blue sea
    },
    {
      id: 2,
      img: img2, // Assuming img2 represents a dark forest background
      title: "Mystical Mangroves",
      text: "In the heart of nature's maze, where whispers of the wild dance through the mystical mangroves",
      headingColor: "#27ae60", // Green color for better visibility on the dark forest
      textColor: "#ecf0f1", // Light grayish color for text on the dark forest
    },
    {
      id: 3,
      img: img3, // Assuming img3 represents a green hill background
      title: "Rolling Hills of Tranquility",
      text: "Amongst emerald fields and rolling hills, find solace in the soothing embrace of Sylhet's tea gardens",
      headingColor: "#2ecc71", // Red color for readability on the green hill
      textColor: "#ecf0f1", // Light grayish color for text on the green hill
    },
  ];

  return (
    <Box sx={{ mt: "40px" }}>
      <Container>
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Box
                sx={{
                  position: "relative",
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  backgroundColor="rgba(0, 0, 0, 0.3)" // Adjust overlay transparency
                />

                <Stack
                  position="relative"
                  sx={{ textAlign: "center", zIndex: 1 }}
                >
                  {/* Heading with dynamic gradient and color based on image */}
                  <Typography
                    variant="h4"
                    component="h3"
                    color={slide.headingColor}
                    sx={{
                      fontWeight: 800,
                      fontSize: "48px",
                    }}
                  >
                    {slide.title}
                  </Typography>

                  {/* Subheading with dynamic gradient and color based on image */}
                  <Typography
                    variant="h6"
                    component="h4"
                    color={slide.textColor}
                    sx={{
                      fontWeight: 600,
                      fontSize: "28px",
                      textShadow: "4px",
                    }}
                  >
                    {slide.text}
                  </Typography>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Banner;
