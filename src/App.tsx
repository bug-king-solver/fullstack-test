import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mdTheme = createTheme();

function App() {
  const client = new QueryClient();
  const router = createBrowserRouter([routes()]);

  return (
    <ThemeProvider theme={mdTheme}>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
