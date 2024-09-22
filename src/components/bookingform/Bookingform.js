import React, { useState } from "react";
import { CustomInputField } from "./CustomInputField";
import { Phone } from "@mui/icons-material";
import { Grid, Typography, Button } from "@mui/material";
// bookform

const Bookingform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [departure, setDeparture] = useState("");
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
      direction="column"
      spacing={2}
      sx={{ bgcolor: "#e1c699", p: 4, borderRadius: 5 }}
    >
      <Grid item>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Find Your Best Umrah Package
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1" align="center" sx={{ color: "#555" }}>
          Find the world's largest collection of Hajj & Umrah Packages
        </Typography>
      </Grid>
      <Grid
        container
        sx={{ bgcolor: "#e1c699", p: 2, borderRadius: 5 }}
        spacing={2}
      >
        <Grid item>
          <CustomInputField label="Name" value={name} setValue={setName} />
        </Grid>
        <Grid item>
          <CustomInputField label="Email" value={email} setValue={setEmail} />
        </Grid>
        <Grid item>
          <CustomInputField label="Phone" value={phone} setValue={setPhone} />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Departure"
            value={departure}
            setValue={setDeparture}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Arrival"
            value={arrival}
            setValue={setArrival}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Makkah Nights"
            value={makkahNights}
            setValue={setMakkahNights}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Madina Nights"
            value={madinaNights}
            setValue={setMadinaNights}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Travel Date"
            value={travelDate}
            setValue={setTravelDate}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Room Preference"
            value={roomPreference}
            setValue={setRoomPreference}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Check-In"
            value={checkin}
            setValue={setCheckin}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Check-Out"
            value={checkout}
            setValue={setCheckout}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Adults"
            value={adults}
            setValue={setAdults}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Children"
            value={children}
            setValue={setChildren}
          />
        </Grid>
        <Grid item>
          <CustomInputField
            label="Infants"
            value={infants}
            setValue={setInfants}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            sx={{ bgcolor: "#333", color: "#e1c699", mt: 2 }}
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Bookingform;
