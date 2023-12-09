import { Box, Container, Stack, Typography } from "@mui/material";
import { FacebookShareButton } from "react-share";
import { FacebookOutlined } from "@mui/icons-material";
import useBlogs from "../../hooks/useBlogs/useBlogs";
import { useLocation, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../shared/PageTitle/PageTitle";

const Blog = () => {
  const { blogs, isLoading } = useBlogs();
  const { id } = useParams();
  const location = useLocation();
  const { user } = useAuth();

  const currentUrl = location.pathname;

  if (isLoading) {
    return <Loader />;
  }

  const blog = blogs.find((blog) => blog._id == id);

  const {
    storyTitle,
    publishedDate,
    storyText,
    thumbnail,
    writerImg,
    writerEmail,
    writerName,
  } = blog;

  return (
    <Container width="lg">
      <Box
        width="100%"
        sx={{ mx: "auto", textAlign: "center" }}
      >
        <PageTitle title={storyTitle} />
        <Stack
          direction="column"
          // justifyContent={"center"}
          // alignItems={"center"}
          width={{ xs: "100%", lg: 4 / 5, mx: "auto" }}
        >
          <Box
            component="img"
            src={thumbnail}
            height="400px"
            sx={{ width: "100%", mx: "auto" }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ px: 2 }}
          >
            <Stack
              direction="column"
              gap={1}
              alignItems="center"
              sx={{ mt: 1 }}
              justifyContent="center"
            >
              <Box
                component="img"
                src={writerImg}
                height="40px"
                width="40px"
                sx={{ borderRadius: "50%" }}
              />
              <Typography
                textAlign="center"
                variant="body2"
              >
                Writer: {writerName}
              </Typography>
              <Typography
                textAlign="center"
                variant="body2"
              >
                Writer Email: {writerEmail}
              </Typography>
            </Stack>
            <Typography>PublishedDate: {publishedDate}</Typography>
          </Stack>
        </Stack>
        <Box sx={{ backgroundColor: "aliceblue", p: 3, mt: 2 }}>
          <Typography
            textAlign={"justify"}
            variant="body1"
            sx={{ fontWeight: 500 }}
          >
            {storyText}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography>Share on Facebook</Typography>
        {user ? (
          <FacebookShareButton url={currentUrl}>
            <FacebookOutlined
              variant="contained"
              color="primary"
            ></FacebookOutlined>
          </FacebookShareButton>
        ) : (
          <Typography>Login to share</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Blog;
