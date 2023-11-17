import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";

const mdTheme = createTheme();

function App() {
  const router = createBrowserRouter([routes()]);

  return (
    <ThemeProvider theme={mdTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
