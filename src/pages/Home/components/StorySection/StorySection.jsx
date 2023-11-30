import { Box, Button, Stack } from "@mui/material";
import { PageTitle } from "../../../../shared";
import { useBlogs } from "../../../../hooks";
import { Loader, StoryCard } from "../../../../components";
import { Link } from "react-router-dom";

const StorySection = () => {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <PageTitle title={"Story Section"} />
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ my: 5 }}
        gap={6}
      >
        {blogs.slice(0, 4).map((blog) => (
          <StoryCard
            key={blog._id}
            blog={blog}
          />
        ))}
      </Stack>
      <Stack
        alignItems={"center"}
        just
      >
        <Button
          variant="contained"
          color="secondary"
          LinkComponent={Link}
          to="/blogs"
          sx={{
            ":active": {
              transform: "scale(0.95)",
            },
          }}
        >
          All Stories
        </Button>
      </Stack>
    </Box>
  );
};

export default StorySection;
