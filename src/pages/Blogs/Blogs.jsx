import { Box, Stack } from "@mui/material";
import { PageTitle } from "../../shared";
import { Loader, StoryCard } from "../../components";
import { useBlogs } from "../../hooks";

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
