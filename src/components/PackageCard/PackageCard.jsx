import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useAuth, useAxiosSecure } from "../../hooks";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const PackageCard = ({ tour }) => {
  const { _id, thumbnail, name, category, price } = tour;

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddToWishlist = () => {
    if (user) {
      const item = {
        name,
        thumbnail,
        price,
        email: user.email,
      };

      axiosSecure.post("/wishlist/add", item).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(" Added to wishlist");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login to complete this operation",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <Grid item>
      <Box
        width={"300px"}
        height={"400px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}
        justifyContent={"space-around"}
        sx={{
          backgroundColor: "aqua",
          borderRadius: "10px",
          boxShadow: "5px",
          px: "10px",
          ":hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Box sx={{ position: "relative", display: "flex" }}>
          <Box
            component={"img"}
            width={4 / 5}
            sx={{ mx: "auto" }}
            src={thumbnail}
          />
          <IconButton
            aria-label="add to wishlist"
            sx={{ position: "absolute", right: "130px", bottom: 0 }}
            color="primary"
            title="Add to Wishlist"
            onClick={handleAddToWishlist}
          >
            <FavoriteIcon fontSize="24px" />
          </IconButton>
        </Box>
        <Typography
          component={"p"}
          variant="subtitle1"
          sx={{ color: "teal", fontWeight: 300 }}
        >
          Tour Type: {category}
        </Typography>
        <Typography
          component={"h5"}
          variant="h6"
          sx={{ color: "blue", fontWeight: 500 }}
        >
          {name}
        </Typography>
        <Typography
          component={"h6"}
          variant="h6"
          sx={{ color: "green", fontWeight: 400 }}
        >
          Price: {price} / person
        </Typography>
        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            LinkComponent={Link}
            to={`/package/${_id}`}
            sx={{
              backgroundColor: "red",
              color: "white",
              ":active": {
                transform: "scale(.95)",
              },
            }}
          >
            Details
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
};

PackageCard.propTypes = {
  tour: PropTypes.object,
};

export default PackageCard;
