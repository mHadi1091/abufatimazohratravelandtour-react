import React from "react";
import { Grid } from "@mui/material";
import PaymentCards from "../components/card/PaymentCards";

const PaymentSection = () => {
  const packagesData = [
    {
      name: "Basic Package",
      des: "This package includes basic features for personal use.",
      price: "$29/month",
      btnTxt: "Register Now",
    },
    {
      name: "Normal Package",
      des: "Best for businesses with advanced features.",
      price: "$35/month",
      btnTxt: "Register Now",
    },
    {
      name: "Premium Package",
      des: "Best for businesses with advanced features.",
      price: "$59/month",
      btnTxt: "Register Now",
    },
  ];
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
      my={5}
    >
      {packagesData.map((data) => (
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PaymentCards data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PaymentSection;
