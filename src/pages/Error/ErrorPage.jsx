import { Box, Button } from "@mui/material";
import errorImg from "../../assets/error.jpg";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignContent={"center"}
      justifyContent={"center"}
      height={"100vh"}
      style={{ py: "40px",gap:"20px" }}
    >
      <Box
        component={"img"}
        src={errorImg}
        height={4 / 5}
      />
      <Box textAlign={"center"}   style={{ mt: "30px" }}>
        <Button
          startIcon={<Home />}
          variant="contained"
          LinkComponent={Link}
          to="/"
        
          size="medium"
        >
          Go Home
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
