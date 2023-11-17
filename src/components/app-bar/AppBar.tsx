import React, { useState } from "react";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const StyledAppBar = styled(MuiAppBar)`
  padding: 12px 30px;
  flex-direction: row;
`;

export type AppBarProps = {
  title: string;
};

export const AppBar = ({ title }: AppBarProps) => {
  const [timeLine, setTimeLine] = useState("");

  const handleChangeTimeLine = (event: SelectChangeEvent) => {
    setTimeLine(event.target.value as string);
  };
  return (
    <StyledAppBar>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, alignSelf: "center" }}
      >
        {title}
      </Typography>
      <FormControl variant="outlined" sx={{ minWidth: 160, marginLeft: 2 }}>
        <InputLabel id="time-line-select-label">Select Time Line</InputLabel>
        <Select
          value={timeLine}
          onChange={handleChangeTimeLine}
          sx={{ color: "inherit" }}
          label="Select Time Line"
          labelId="time-line-select-label"
          id="time-line-select"
        >
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="yesterday">Yesterday</MenuItem>
          <MenuItem value="lastSevenDays"> Last seven days</MenuItem>
          <MenuItem value="thisMonth">This month</MenuItem>
        </Select>
      </FormControl>
    </StyledAppBar>
  );
};
