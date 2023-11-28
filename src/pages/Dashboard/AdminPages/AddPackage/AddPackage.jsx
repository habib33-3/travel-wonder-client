import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { PageTitle } from "../../../../shared";
import { useAxiosSecure, useCategories } from "../../../../hooks";
import { Loader } from "../../../../components";
import { useState } from "react";
import toast from "react-hot-toast";

const AddPackage = () => {
  const { categories, isLoading } = useCategories();
  const axiosSecure = useAxiosSecure();

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [price, setPrice] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day3, setDay3] = useState("");

  if (isLoading) {
    return <Loader />;
  }

  const handleAddPackage = (e) => {
    e.preventDefault();

    const filtered = categories.find((card) => card.name == category);
    const categoryId = filtered.categoryId;

    const trip = {
      name,
      thumbnail,
      category,
      categoryId,
      description,
      images: [img1, img2, img3, img4, img5],
      price: parseFloat(price),
      activities: [day1, day2, day3],
    };

    console.log(trip);

    axiosSecure.post("/packages/addPackage", trip).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Package Added");
      }
    });
  };

  return (
    <Box>
      <PageTitle title={"Add Tour Package"} />

      <Box>
        <Container
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <Box
            component={"form"}
            onSubmit={handleAddPackage}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Package name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    autoWidth
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {categories.map((category) => (
                      <MenuItem
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="thumbnail"
                  label="Tour Thumbnail"
                  name="thumbnail"
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Tour Description"
                  name="description"
                  multiline
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Typography>Enter Five images</Typography>
                <TextField
                  required
                  fullWidth
                  id="img1"
                  label="Image1"
                  name="img1"
                  sx={{ mt: "4px" }}
                  onChange={(e) => setImg1(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  id="img2"
                  label="Image2"
                  name="img2"
                  sx={{ mt: "4px" }}
                  onChange={(e) => setImg2(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  id="img3"
                  label="Image3"
                  name="img3"
                  sx={{ mt: "4px" }}
                  onChange={(e) => setImg3(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  id="img4"
                  label="Image4"
                  name="img4"
                  sx={{ mt: "4px" }}
                  onChange={(e) => setImg4(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  id="img5"
                  label="Image5"
                  name="img5"
                  sx={{ mt: "4px" }}
                  onChange={(e) => setImg5(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Package Price"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Typography>Write activity of Each Day</Typography>
                <TextField
                  required
                  fullWidth
                  id="day1"
                  label="day1"
                  name="day1"
                  sx={{ mt: "4px" }}
                  onChange={(e) => setDay1(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  id="day2"
                  label="day2"
                  name="day2"
                  sx={{ mt: "4px" }}
                  onChange={(e) => setDay2(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  id="day3"
                  label="day3"
                  name="day3"
                  sx={{ mt: "4px" }}
                  onChange={(e) => setDay3(e.target.value)}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  ":active": {
                    transform: "scale(.95)",
                  },
                }}
              >
                Add Package
              </Button>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AddPackage;
