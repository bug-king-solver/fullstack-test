import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function FailedAlert() {
  return (
    <Stack sx={{ width: "100%", marginTop: "30px" }} spacing={2}>
      <Alert variant="filled" severity="error">
        Server Error
      </Alert>
    </Stack>
  );
}
