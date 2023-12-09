import { Box, Stack } from "@mui/material";
import useBlogs from "../../hooks/useBlogs/useBlogs";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../shared/PageTitle/PageTitle";
import StoryCard from "../../components/StoryCard/StoryCard";


const Blogs = () => {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <PageTitle title={"Users Blog"} />
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ my: 5 }}
        gap={6}
      >
        {blogs.map((blog) => (
          <StoryCard
            key={blog._id}
            blog={blog}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Blogs;
