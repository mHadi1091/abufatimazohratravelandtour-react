import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import hero1 from "./heheh/4.svg";
import hero2 from "./heheh/1.svg";
import hero3 from "./heheh/2.svg";

const images = [hero1, hero2, hero3];

const HeroSlider = () => {
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomIn(true);
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "800px",
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: "800px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`Hero Image ${index + 1}`}
              sx={{
                height: "800px",
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the color and opacity as needed
                zIndex: 1, // Ensure overlay is above the image
              }}
            />
          </Box>
        ))}
      </Slider>
      {/* Text on top of the overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          zIndex: 2, // Ensure text is above the overlay
          transition: "transform 0.5s ease", // Transition for smooth zoom effect
          transform: zoomIn
            ? "translate(-50%, -50%) scale(1.5)"
            : "translate(-50%, -50%) scale(1)", // Increased scale for more zoom
        }}
      >
        <Typography variant="h3" component="div">
          Welcome to <br></br>{" "}
          <span style={{ fontWeight: "bold", color: "gold" }}>
            Abu Fatima Zohra
          </span>
          <br></br>Travel and Tours
        </Typography>
        <Typography variant="h6" component="div">
          Explore Our Packages
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSlider;
