import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import PhotoAlbum from "react-photo-album";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Details = ({ tour }) => {
  const { thumbnail, images, category, price } = tour;

  const photos = [
    {
      src: images[0],
      width: 800,
      height: 600,
    },
    {
      src: images[1],
      width: 800,
      height: 600,
    },
    {
      src: images[2],
      width: 800,
      height: 600,
    },
    {
      src: images[3],
      width: 700,
      height: 600,
    },
    {
      src: images[4],
      width: 900,
      height: 600,
    },
  ];

  return (
    <Container>
      <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box>
          <PhotoAlbum
            columns={3}
            layout="masonry"
            photos={photos}
          />
        </Box>
        <Box>
          <Typography
            component={"h4"}
            variant="h4"
            sx={{ textAlign: "center", mt: 3 }}
          >
            Tour Type: {category}
          </Typography>
          <Typography
            component={"p"}
            variant="body1"
            sx={{ textAlign: "justified", mt: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            aliquam.lorem20 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rem obcaecati, aliquid officiis numquam nemo quos iusto unde
            ex voluptatibus eveniet.
          </Typography>

          <Typography
            component={"p"}
            variant="h5"
          >
            Price: {price} per person
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

Details.propTypes = {
  tour: PropTypes.object,
};

export default Details;
