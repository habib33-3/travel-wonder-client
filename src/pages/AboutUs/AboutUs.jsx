import { Box, Container, Typography } from "@mui/material";
import PageTitle from "../../shared/PageTitle/PageTitle";

const AboutUs = () => {
  return (
    <Container maxWidth="md" >
      <Box sx={{ backgroundColor: "antiquewhite", p: 4 }} height={"100vh"}>
        <PageTitle title={"About Us - Travel Guide"} />
        <Box>
          <Typography
            sx={{ fontWeight: 600 }}
            textAlign={"justify"}
          >
            Welcome to Travel Guide, where we celebrate one year of crafting
            extraordinary travel experiences tailored just for you. As your
            dedicated companion, we specialize in curating enriching and
            authentic journeys that transcend borders.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{ fontWeight: 700 }}
            textAlign={"center"}
            variant="h4"
          >
            Our Mission
          </Typography>
          <Typography
            sx={{ fontWeight: 600 }}
            textAlign={"justify"}
          >
            At Travel Guide, our mission is to unlock the wonders of the
            Bangladesh, providing personalized and immersive travel experiences
            that go beyond the ordinary. We are committed to creating memories
            that last a lifetime, wherever your wanderlust takes you
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
