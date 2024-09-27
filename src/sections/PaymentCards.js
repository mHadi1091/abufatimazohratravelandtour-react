import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const PaymentCards = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia
        component="img"
        height="200" // Adjust height to fit your design
        image={data.imgSrc} // Ensure this path is correct
        alt={data.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.des}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{data.btnTxt}</Button>
      </CardActions>
    </Card>
  );
};

export default PaymentCards;
