import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#FF4081",
    },
    error: {
      main: "#E53935",
    },
    warning: {
      main: "#FFD740",
    },
    info: {
      main: "#4CAF50",
    },
    success: {
      main: "#FF5722",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
