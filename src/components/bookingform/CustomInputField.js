import { Rowing } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ReactDOM from "react-dom/client";

export const CustomInputField = ({ value, setValue }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography sx={{ color: "black" }}>Enter your name:</Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Stack>
  );
};
