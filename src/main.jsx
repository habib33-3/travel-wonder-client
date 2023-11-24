import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Router";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
