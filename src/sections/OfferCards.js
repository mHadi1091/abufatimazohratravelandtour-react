// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";

// export default function OffersCards() {
//   const offers = [
//     {
//       title: "Ramadan Offer",
//       description:
//         "Travel packages during Ramadan. Experience the holy month with family & friends.",
//       image: "/assets/5.svg", // Path for Ramadan offer image
//     },
//     {
//       title: "Hajj Packages",
//       description:
//         "Join us for an unforgettable Hajj experience. Affordable packages with top accommodations.",
//       image: "/assets/2.svg", // replace with your actual image path
//     },
//     {
//       title: "Off-Season Offer",
//       description:
//         "Enjoy exclusive discounts during the off-season. Perfect for budget travelers!",
//       image: "/assets/9.svg", // replace with your actual image path
//     },
//   ];

//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{ backgroundColor: "#0C2D26", padding: "20px" }}
//     >
//       {" "}
//       {/* Dark green background */}
//       {offers.map((offer, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Card
//             sx={{
//               maxWidth: 345,
//               border: "1px solid #D4AF37" /* Gold border */,
//               backgroundColor:
//                 "#0C2D26" /* Dark green background for the card */,
//               color: "#D4AF37" /* Gold text */,
//             }}
//           >
//             <CardMedia
//               component="img"
//               alt={offer.title}
//               height="140"
//               image={offer.image}
//             />
//             <CardContent>
//               <Typography
//                 gutterBottom
//                 variant="h5"
//                 component="div"
//                 sx={{ color: "#D4AF37" }}
//               >
//                 {offer.title}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#D4AF37" }}>
//                 {offer.description}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button
//                 size="small"
//                 sx={{
//                   backgroundColor: "#C08B45" /* Light gold button */,
//                   color: "#FFFFFF" /* White text on button */,
//                   "&:hover": {
//                     backgroundColor: "#D4AF37" /* Gold button on hover */,
//                   },
//                 }}
//               >
//                 Register Now
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function OffersCards({ scrollToBooking }) {
  const offers = [
    {
      title: "Ramadan Offer",
      description:
        "Travel packages during Ramadan. Experience the holy month with family & friends.",
      image: "/assets/5.svg", // Path for Ramadan offer image
    },
    {
      title: "Hajj Packages",
      description:
        "Join us for an unforgettable Hajj experience. Affordable packages with top accommodations.",
      image: "/assets/2.svg", // replace with your actual image path
    },
    {
      title: "Off-Season Offer",
      description:
        "Enjoy exclusive discounts during the off-season. Perfect for budget travelers!",
      image: "/assets/9.svg", // replace with your actual image path
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "#0C2D26", padding: "20px" }}
    >
      {offers.map((offer, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              maxWidth: 345,
              border: "1px solid #D4AF37" /* Gold border */,
              backgroundColor:
                "#0C2D26" /* Dark green background for the card */,
              color: "#D4AF37" /* Gold text */,
            }}
          >
            <CardMedia
              component="img"
              alt={offer.title}
              height="140"
              image={offer.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#D4AF37" }}
              >
                {offer.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#D4AF37" }}>
                {offer.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#C08B45" /* Light gold button */,
                  color: "#FFFFFF" /* White text on button */,
                  "&:hover": {
                    backgroundColor: "#D4AF37" /* Gold button on hover */,
                  },
                }}
                onClick={scrollToBooking} // Scroll to the booking section
              >
                Register Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
