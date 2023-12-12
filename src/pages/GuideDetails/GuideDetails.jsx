import { Box, Container, Stack, Typography } from "@mui/material";
import ReviewForm from "./ReviewForm/ReviewForm";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../shared/PageTitle/PageTitle";
import useGuideData from "../../hooks/useGuideData/useGuideData";
import Reviews from "./Reviews/Reviews";

const GuideDetails = () => {
  const { id } = useParams();

  const { guides, isLoading } = useGuideData();

  if (isLoading) {
    return <Loader />;
  }

  const guide = guides.find((guide) => guide._id == id);

  const { name, email, pic, phone, language, education, skill, experience } =
    guide;

  return (
    <Box>
      <PageTitle title={`${name}'s Profile`} />
      <Container>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={10}
        >
          <Box
            component={"img"}
            src={pic}
            height={"120px"}
            width={"120px"}
            sx={{ borderRadius: "50%" }}
          />

          <Box>
            <Typography
              textAlign={"center"}
              variant="h4"
            >
              Contact
            </Typography>
            <Box
              width={"100%"}
              sx={{
                border: "solid",
                borderColor: "black",
                p: 4,
                mx: "auto",
                mt: 1,
              }}
            >
              <Typography variant="h6">Email: {email}</Typography>
              <Typography variant="h6">Phone No: {phone}</Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              textAlign={"center"}
              variant="h4"
            >
              Qualification
            </Typography>
            <Box
              width={"100%"}
              sx={{
                border: "solid",
                borderColor: "black",
                p: 4,
                mx: "auto",
                mt: 1,
              }}
            >
              <Typography variant="h6">Education: {education}</Typography>
              <Typography variant="h6">
                Skills: {skill.map((i) => i)}
              </Typography>
              <Typography variant="h6">
                Languages: {language.map((i) => i)}
              </Typography>
              <Typography variant="h6">
                Experience: {experience} years
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Reviews guideEmail={email} />
        <ReviewForm guideEmail={email} />
      </Container>
    </Box>
  );
};

export default GuideDetails;
