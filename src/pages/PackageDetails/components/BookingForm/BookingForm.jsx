import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth, useAxiosSecure, useGuideData } from "../../../../hooks";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingForm = ({ tour }) => {
  const { user } = useAuth();
  const { guides } = useGuideData();

  const axiosSecure = useAxiosSecure();

  const navigate = useNavigation();

  const [startDate, setStartDate] = useState(new Date());
  const [guideEmail, setGuideEmail] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBooking = (e) => {
    e.preventDefault();

    const booking = {
      touristName: user.displayName,
      touristEmail: user.email,
      touristPic: user.photoURL,
      price: tour.price,
      startDate,
      guideEmail,
      status: "in review",
    };

    console.log(booking);

    axiosSecure.post("/booking/addBooking", booking).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        handleOpen();
      }
    });
  };

  return (
    <Box>
      <Typography
        textAlign={"center"}
        variant="h4"
      >
        Booking Form
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
            onSubmit={handleBooking}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="userEmail"
              label="Your Email"
              name="userEmail"
              defaultValue={user.email}
              disabled
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Your name"
              name="userName"
              defaultValue={user.displayName}
              disabled
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="userImg"
              label="Your Photo"
              name="userImg"
              defaultValue={user.photoURL}
              disabled
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              defaultValue={tour.price}
              disabled
              autoFocus
            />
            <Box>
              <Typography>Booking Date</Typography>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Box>
            <FormControl
              sx={{ my: 2 }}
              fullWidth
            >
              <InputLabel id="demo-simple-select-label">Guide</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={guideEmail}
                onChange={(e) => setGuideEmail(e.target.value)}
                label="Guide"
              >
                {guides?.map((guide) => (
                  <MenuItem
                    key={guide._id}
                    value={guide.email}
                  >
                    {guide.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                ":active": {
                  transform: "scale(0.95)",
                },
              }}
              disabled={!user}
            >
              {user ? "Book Now" : "Login to Book"}
            </Button>
          </Box>
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
          >
            Confirm Your Booking
          </Typography>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              variant="contained"
              color={"info"}
              id="modal-modal-description"
              sx={{ mt: 2 }}
              LinkComponent={Link}
              to="/"
            >
              Your Bookings
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

BookingForm.propTypes = {
  tour: PropTypes.object,
};

export default BookingForm;
