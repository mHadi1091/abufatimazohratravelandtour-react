// import React from "react";
// import { Grid } from "@mui/material";
// import PaymentCards from "../components/card/PaymentCards";

// const PaymentSection = () => {
//   const packagesData = [
//     {
//       name: "Ramadan Packages",
//       des: "This package includes basic features for personal use.",
//       price: "$29/month",
//       btnTxt: "Register Now",
//     },
//     {
//       name: "Hajj Packages",
//       des: "Best for businesses with advanced features.",
//       price: "$35/month",
//       btnTxt: "Register Now",
//     },
//     {
//       name: "Off-Season Packages",
//       des: "Best for businesses with advanced features.",
//       price: "$59/month",
//       btnTxt: "Register Now",
//     },
//   ];
//   return (
//     <Grid
//       container
//       justifyContent={"center"}
//       alignItems={"center"}
//       spacing={5}
//       my={5}
//     >
//       {packagesData.map((data) => (
//         <Grid
//           item
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <PaymentCards data={data} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };
// export default PaymentSection;
import React from "react";
import { Grid } from "@mui/material";
import PaymentCards from "../components/card/PaymentCards";

const PaymentSection = () => {
  const packagesData = [
    {
      name: "Ramadan Packages",
      des: "This package includes basic features for personal use.",
      price: "$29/month",
      btnTxt: "Register Now",
      imgSrc: "/assets/1.svg", // Updated path to public folder
    },
    {
      name: "Hajj Packages",
      des: "Best for businesses with advanced features.",
      price: "$35/month",
      btnTxt: "Register Now",
      imgSrc: "/assets/2.svg", // Updated path to public folder
    },
    {
      name: "Off-Season Packages",
      des: "Best for businesses with advanced features.",
      price: "$59/month",
      btnTxt: "Register Now",
      imgSrc: "/assets/3.svg", // You can add this image too if available
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
      my={4}
    >
      {packagesData.map((data, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <PaymentCards data={data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PaymentSection;
