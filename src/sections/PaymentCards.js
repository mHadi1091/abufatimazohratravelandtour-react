import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const PaymentCards = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      {/* Updated image dimensions: 345px width and 160px height */}
      <CardMedia
        component="img"
        height="160"
        width="345"
        image={data.imgSrc}
        alt={data.name}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {data.des}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {data.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          fullWidth
        >
          {data.btnTxt}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PaymentCards;
