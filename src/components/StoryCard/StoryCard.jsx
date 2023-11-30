import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StoryCard = ({ blog }) => {
  const { _id, storyText, storyTitle, thumbnail, writerImg, writerName } = blog;

  return (
    <Container width="xs">
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ px: 2, py: 4, backgroundColor: "#ADD8E6" }}
        justifyContent={"space-between"}
        component={Paper}
      >
        <Stack
          direction={"column"}
          width={1 / 4}
        >
          <Box
            component={"img"}
            src={thumbnail}
            height={"180px"}
            width={"260px"}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
            sx={{ mt: 1 }}
          >
            <Box
              component={"img"}
              src={writerImg}
              height={"40px"}
              width={"40px"}
              sx={{ borderRadius: "50%" }}
            />
            <Typography
              textTransform={"capitalize"}
              variant="body1"
            >
              {writerName}
            </Typography>
          </Stack>
        </Stack>
        <Box sx={{ p: 2, mt: 1 }}>
          <Typography
            variant="h5"
            textAlign={"center"}
            textTransform={"capitalize"}
            color={"#0C3953"}
            sx={{ fontWeight: 700, mb: 2 }}
          >
            {storyTitle}
          </Typography>
          <Typography
            textAlign={"justify"}
            color="#081B2D"
          >
            {storyText.slice(0, 300)}...
          </Typography>
          <Button
            LinkComponent={Link}
            to={`/blog/${_id}`}
            variant="contained"
            color="info"
            sx={{
              mt: 2,
              ":active": {
                transform: "scale(0.95)",
              },
            }}
          >
            Details
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

StoryCard.propTypes = {
  blog: PropTypes.object,
};

export default StoryCard;
