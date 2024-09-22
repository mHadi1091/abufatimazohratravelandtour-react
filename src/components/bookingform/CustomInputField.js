// import { Rowing } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

export const CustomInputField = ({ label, value, setValue }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography sx={{ color: "black" }}>{label}</Typography>
      <TextField
        label={label}
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Stack>
  );
};
