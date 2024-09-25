import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUs = () => {
  return (
    <Box
      id="bgLayers_comp-kyisxi3y2"
      sx={{
        position: "relative",
        overflow: "hidden",
        padding: "50px 20px",
        backgroundColor: "#e1c699", // Background color
        borderRadius: 8,
      }}
    >
      <Box
        data-testid="colorUnderlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent overlay
          zIndex: 1,
        }}
      />

      {/* <Box
        id="bgMedia_comp-kyisxi3y2"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('public/assets/kaaba-1-portrite.svg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      /> */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#333",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#c79d43", fontWeight: "bold", mb: 4 }}
        >
          Contact Us
        </Typography>

        {/* Contact Items */}
        {[
          {
            icon: <PlaceIcon fontSize="large" />,
            text: "Ibn Salim Street , Building No:17 , Ground Floor Office No: 01 , Jeddah Azizia , Saudia Arabia",
            link: "https://www.google.com/maps?q=65b+Palmerston+Road,+London+E17+6PR", // Example link
          },
          {
            icon: <EmailIcon fontSize="large" />,
            text: "info@abufatimatravel.com",
            link: "mailto:abu.fatima.travel@gmail.com",
          },
          {
            icon: <PhoneIcon fontSize="large" />,
            text: "+966-596314238 , +966-504507210",
            link: "tel: +966-596314238",
            link: "tel: +966-504507210",
          },
        ].map((item, index) => (
          <Box display="flex" alignItems="center" sx={{ mb: 2 }} key={index}>
            {item.icon}
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                ml: 1,
                textDecoration: "underline",
                cursor: "pointer",
              }}
              component="a"
              href={item.link}
              target="_blank" // Open link in new tab
              rel="noopener noreferrer" // Security best practice
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ContactUs;
