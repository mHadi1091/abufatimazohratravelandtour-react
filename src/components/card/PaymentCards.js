import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Stack } from "@mui/material";

const PaymentCards = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        bgcolor: "#1b2a23",
        border: "2px solid #b9935a",
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": {
          bgcolor: "#2a3b32", // Smooth light black hover effect
        },
      }}
    >
      <CardActionArea
        sx={{
          height: 200,
          transition: "0.3s",
          "&:hover": {
            bgcolor: "#2a3b32", // Smooth light black hover effect for CardActionArea
          },
        }}
      >
        <CardContent>
          <Stack direction={"column"} spacing={1}>
            <Typography
              color="#f7dd72"
              gutterBottom
              variant="h5"
              component="div"
            >
              {data.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {data.des}
            </Typography>
            <Typography
              color="#f7dd72"
              gutterBottom
              variant="h5"
              component="div"
            >
              {data.price}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          sx={{
            bgcolor: "#b9935a",
            width: "100%",
            color: "black",
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#2a3b32", // Smooth light black hover effect for Button
              color: "#f7dd72", // Light gold color on hover
            },
          }}
        >
          {data.btnTxt}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PaymentCards;
