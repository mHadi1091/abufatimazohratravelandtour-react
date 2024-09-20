import React, { useState } from "react";
import { CustomInputField } from "./CustomInputField";
import { Grid } from "@mui/material";
import { Phone } from "@mui/icons-material";

const Bookingform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deperture, setDeperture] = useState("");
  const [arrival, setArrival] = useState("");

  return (
    <Grid
      container
      sx={{ bgcolor: "#e1c699", p: 2, borderRadius: 5 }}
      spacing={2}
    >
      <Grid item>
        <CustomInputField value={name} setValue={setName} />
      </Grid>
      <Grid item>
        <CustomInputField value={email} setValue={setEmail} />
      </Grid>
      <Grid item>
        <CustomInputField value={phone} setValue={setPhone} />
      </Grid>
      <Grid item>
        <CustomInputField value={deperture} setValue={setDeperture} />
      </Grid>
      <Grid item>
        <CustomInputField value={arrival} setValue={setArrival} />
      </Grid>
      <Grid item>
        <CustomInputField value={name} setValue={setName} />
      </Grid>
    </Grid>
  );
};

export default Bookingform;
