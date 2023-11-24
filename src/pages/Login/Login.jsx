import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { PageTitle } from "../../shared";
import { Link as RouterLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import { GoogleLogin } from "../../component";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    logIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("You are logged in");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <PageTitle title={"Login Now"} />
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
            onSubmit={handleLogin}
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
                  transform: "scale(.95)",
                },
              }}
            >
              Sign In
            </Button>

            <Grid
              container
              justifyContent="flex-end"
            >
              <Grid item>
                <Typography
                  align="center"
                  variant="body2"
                >
                  Don{"'"}t have an account?{" "}
                  <RouterLink to="/register">sign up</RouterLink>
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

export default Login;
