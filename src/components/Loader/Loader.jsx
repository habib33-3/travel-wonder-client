import { Stack } from "@mui/material";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height="70vh"
    >
      <PropagateLoader color="#36d7b7" />
    </Stack>
  );
};

export default Loader;
