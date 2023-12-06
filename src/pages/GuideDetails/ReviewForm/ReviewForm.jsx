import {
  Box,
  Button,
  Container,
  CssBaseline,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import toast from "react-hot-toast";

const ReviewForm = ({ guideEmail }) => {
  const { user } = useAuth();
  const [value, setValue] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const review = {
      rating: value,
      reviewText,
      guideEmail,
      userEmail: user.email,
      userName: user.displayName,
      userPic: user.photoURL,
    };

    console.log(review);

    axiosSecure.post("/review/addReview", review).then((res) => {
      console.log(res.data);

      if (res.data.insertedId) {
        toast.success("Review Submitted");
      }
    });
  };

  return (
    <Box>
      <Typography
        textAlign={"center"}
        sx={{ mt: 4 }}
        variant="h4"
      >
        Give Review
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
            onSubmit={handleReviewSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              minRows={6}
              multiline
              id="reviewText"
              label="Your Experience"
              name="reviewText"
              autoFocus
              onChange={(e) => setReviewText(e.target.value)}
            />
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!user}
              sx={{ mt: 3, mb: 2, ":active": { transform: "scale(0.95)" } }}
            >
              {user ? "Submit Review" : "Login to Add Review"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ReviewForm.propTypes = {
  guideEmail: PropTypes.string,
};

export default ReviewForm;
