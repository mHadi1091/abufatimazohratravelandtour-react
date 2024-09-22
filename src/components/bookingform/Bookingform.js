import React, { useState } from "react";
import { CustomInputField } from "./CustomInputField";
import { Grid } from "@mui/material";
import { Phone } from "@mui/icons-material";
// bookform

const Bookingform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deperture, setDeperture] = useState("");
  const [arrival, setArrival] = useState("");
  const [makkahNights, setMakkahNights] = useState("");
  const [madinaNights, setMadinaNights] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [roomPreference, setRoomPreference] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [infants, setInfants] = useState("");
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
        <CustomInputField value={makkahNights} setValue={setMakkahNights} />
      </Grid>
      <Grid item>
        <CustomInputField value={madinaNights} setValue={setMadinaNights} />
      </Grid>
      <Grid item>
        <CustomInputField value={travelDate} setValue={setTravelDate} />
      </Grid>
      <Grid item>
        <CustomInputField value={roomPreference} setValue={setRoomPreference} />
      </Grid>
      <Grid item>
        <CustomInputField value={checkin} setValue={setCheckin} />
      </Grid>
      <Grid item>
        <CustomInputField value={checkout} setValue={setCheckout} />
      </Grid>
      <Grid item>
        <CustomInputField value={adults} setValue={setAdults} />
      </Grid>
      <Grid item>
        <CustomInputField value={children} setValue={setChildren} />
      </Grid>
      <Grid item>
        <CustomInputField value={infants} setValue={setInfants} />
      </Grid>
    </Grid>
  );
};

export default Bookingform;
