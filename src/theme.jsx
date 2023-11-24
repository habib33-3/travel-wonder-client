import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196F3", // Updated primary color (Blue)
    },
    secondary: {
      main: "#FF4081", // Updated secondary color (Pink)
    },
    error: {
      main: "#E53935", // Updated error color (Red)
    },
    warning: {
      main: "#FFD740", // Updated warning color (Amber)
    },
    info: {
      main: "#4CAF50", // Updated info color (Green)
    },
    success: {
      main: "#FF5722", // Updated success color (Deep Orange)
    },
  },
});
