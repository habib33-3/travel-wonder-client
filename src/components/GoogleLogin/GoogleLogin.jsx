import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import { useAxiosPublic } from "../../hooks";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        axiosPublic.post("/user/saveUser", res?.user).then((res) => {
          console.log(res.data);
          navigate("/");
          toast.success("Congrats, you are logged in");
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Box
      textAlign={"center"}
      sx={{ my: "24px" }}
    >
      <Typography textAlign={"center"}>or, Continue with</Typography>
      <Button
        variant="contained"
        color="success"
        sx={{
          color: "white",
          py: "16px",
          fontWeight: 800,
          ":active": {
            transform: "scale(0.95)",
          },
        }}
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
      >
        Google
      </Button>
    </Box>
  );
};

export default GoogleLogin;
