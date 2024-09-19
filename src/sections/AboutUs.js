import React from "react";
import { Grid, Typography } from "@mui/material";

const AboutUs = ({ data }) => {
  return (
    <Grid
      container
      bgcolor="#e1c699"
      sx={{ borderRadius: 10, padding: { xs: 5, sm: 7, lg: 10 }, my: 5 }}
    >
      {data.label ? (
        <Grid item xs={12} mb={2}>
          <Typography color="#c79842" variant="h4" fontWeight={650}>
            {data.label}
          </Typography>
        </Grid>
      ) : null}
      <Grid item xs={12}>
        <Typography color="black" variant="h4">
          {data.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="black">{data.detailDes}</Typography>
      </Grid>
      {data.ArabicLabel ? (
        <Grid item xs={12}>
          <Typography color="black">{data.ArabicLabel}</Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default AboutUs;
