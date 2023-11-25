import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Router";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./theme";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={themeOptions}>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
