import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#171d00", color: "#333" }}
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          {/* Logo and Company Name */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <img
                src="/company-logo/abu-fatima-zohra-logo.svg"
                alt="Company Logo"
                style={{ maxWidth: "50px", marginRight: "10px" }}
              />
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "#c79d43", fontWeight: "bold" }}
              >
                Abu Fatima Zohra Travel and Tours
              </Typography>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={4}>
            <nav>
              <Button href="#home" sx={{ color: "#c79d43" }}>
                Home
              </Button>
              <Button href="#about-us" sx={{ color: "#c79d43" }}>
                About Us
              </Button>
              <Button href="#payment" sx={{ color: "#c79d43" }}>
                Packages
              </Button>
              <Button href="#faqs" sx={{ color: "#c79d43" }}>
                FAQs
              </Button>
              <Button href="#contact-us" sx={{ color: "#c79d43" }}>
                Contact Us
              </Button>
            </nav>
          </Grid>

          {/* Search Bar */}
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="flex-end">
              <InputBase
                placeholder="Search..."
                sx={{
                  border: "1px solid #ccc",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  marginRight: "8px",
                  width: "200px",
                  color: "#a0ae77",
                }}
              />
              {/* <IconButton sx={{ color: "#333" }}>
                <SearchIcon />
              </IconButton> */}{" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#c79d43",
                  color: "#fff",
                  width: "auto", // Adjust width dynamically
                  height: "40px", // Set the overall height to 5px
                  fontSize: "20px", // Smaller font to match the button size
                  lineHeight: "5px", // Adjust line height for the small button
                  padding: "2", // Remove padding to avoid increasing size
                  minWidth: "5px", // Ensure the button can shrink to a small size
                  "&:hover": {
                    backgroundColor: "#b08835",
                  },
                }}
              >
                🔍
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
