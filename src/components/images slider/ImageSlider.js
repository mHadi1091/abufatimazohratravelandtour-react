// import React from "react";
// import Slider from "react-slick";
// import { Box, Typography } from "@mui/material";
// import hero1 from "./heheh/herosize_kaaba_image.svg";
// import hero2 from "./heheh/kaaba pic 1.svg";
// import hero3 from "./heheh/kaaba3.svg";
// import hero4 from "./heheh/clock-tower.svg";

// const images = [hero1, hero2, hero3, hero4];

// const HeroSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "800px",
//         overflow: "hidden",
//       }}
//     >
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <Box
//             key={index}
//             component="img"
//             src={image}
//             alt={`Hero Image ${index + 1}`}
//             sx={{
//               height: "800px",
//               width: "1600px",
//               objectFit: "cover",
//               display: "block",
//               overlay: "0.5",
//             }}
//           />
//         ))}
//       </Slider>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "40%",
//           left: "50%",
//           transform: "translateX(-50%)",
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         <Typography variant="h2" component="div">
//           Welcome to Abu Fatima Zohra Travel and Tours
//         </Typography>
//         <Typography variant="h6" component="div">
//           Explore Our Packages
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSlider;
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import hero1 from "./heheh/herosize_kaaba_image.svg";
import hero2 from "./heheh/1.svg";
import hero3 from "./heheh/2.svg";
import hero4 from "./heheh/3.svg";
import hero5 from "./heheh/4.svg";

const images = [hero1, hero2, hero3, hero4, hero5];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
              width: "1600px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`Hero Image ${index + 1}`}
              sx={{
                height: "800px",
                width: "1600px",
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
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          zIndex: 2, // Ensure text is above the overlay
        }}
      >
        <Typography variant="h2" component="div">
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
