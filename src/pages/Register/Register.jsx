import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Link as RouterLink, useNavigation } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import toast from "react-hot-toast";
import { GoogleLogin } from "../../components";
import { useAuth, useAxiosPublic } from "../../hooks";
import { PageTitle } from "../../shared";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { uploadImg } from "../../util";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigation();

  const handleRegister = (e) => {
    e.preventDefault();

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUserProfile(name, pic)
          .then(() => {})
          .catch((err) => toast.error(err.message));

        axiosPublic.post("/user/saveUser", res?.user).then((res) => {
          console.log(res.data);
          navigate("/");
          toast.success("Congratulation, you are registered");
        });
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message);
      });
  };

  // const VisuallyHiddenInput = styled("input")({
  //   clip: "rect(0 0 0 0)",
  //   clipPath: "inset(50%)",
  //   height: 1,
  //   overflow: "hidden",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: "nowrap",
  //   width: 1,
  // });

  // const handleRegister = async (e) => {
  //   e.preventDefault();

  //   console.log(pic);

  //   try {
  //     const res = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, pic, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     console.log(res)
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <div>
      <PageTitle title={"Register Now"} />
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
            sx={{ mt: 3 }}
            onSubmit={handleRegister}
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
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="pic"
                  label="Picture"
                  name="pic"
                  onChange={(e) => setPic(e.target.value)}
                />
                {/* <Typography>Upload Your Picture</Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => setPic(e.target.files[0])}
                    accept="image/*"
                  />
                </Button> */}
                {/* <input
                  type="file"
                
                  id=""
                  name="imgData"
                  onChange={(e) => setPic(e.target.files[0])}
                /> */}
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ position: "relative" }}
              >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={visible ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "4px",
                    bottom: "12px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </span>
              </Grid>
            </Grid>
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
            >
              Sign Up
            </Button>

            <Grid
              container
              justifyContent="flex-end"
            >
              <Grid item>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <RouterLink to="/login">sign in</RouterLink>
                </Typography>
              </Grid>
            </Grid>
            <Box>
              <GoogleLogin />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Register;
