import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useAxiosSecure } from "../../../../../hooks";
import toast from "react-hot-toast";

const StoryForm = ({ user }) => {
  const [storyTitle, setStoryTitle] = useState("");
  const [storyText, setStoryText] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const axiosSecure = useAxiosSecure();

  const handleSubmitStory = (e) => {
    e.preventDefault();

    const story = {
      storyTitle,
      storyText,
      thumbnail,
      writerName: user.displayName,
      writerImg: user.photoURL,
      writerEmail: user.email,
      publishedDate: new Date().toLocaleDateString("en-UK"),
    };

    console.log(story);

    axiosSecure.post("/blog/addBlog", story).then((res) => {
      console.log(res.data);

      if (res.data.insertedId) {
        toast.success("Story Submitted!");
      }
    });
  };

  return (
    <Box>
      <Typography
        textAlign={"center"}
        variant="h4"
        sx={{ my: 5 }}
      >
        Write about your journey
      </Typography>

      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmitStory}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="storyTitle"
              label="Story Title"
              name="storyTitle"
              autoFocus
              onChange={(e) => setStoryTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              minRows={6}
              multiline
              id="storyText"
              label="Your Story"
              name="storyText"
              autoFocus
              onChange={(e) => setStoryText(e.target.value)}
            />

            <TextField
              required
              fullWidth
              id="pic"
              label="Thumbnail Img"
              name="pic"
              onChange={(e) => setThumbnail(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!user}
              sx={{ mt: 3, mb: 2, ":active": { transform: "scale(0.95)" } }}
            >
              {user ? "Submit Story" : "Login to Submit Story"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

StoryForm.propTypes = {
  user: PropTypes.object,
};

export default StoryForm;
