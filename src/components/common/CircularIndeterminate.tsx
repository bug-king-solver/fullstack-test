import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

export default function CircularIndeterminate() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set the height of the container to fill the viewport
      }}
    >
      <CircularProgress />
    </Container>
  );
}
