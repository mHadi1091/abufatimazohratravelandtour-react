import React from "react";
import { AppBar, Toolbar, Grid, Button, Box } from "@mui/material";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#171d00", color: "#333" }}>
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          {/* Logo and Company Name */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <img
                onClick={scrollToTop} // Scroll to top when clicked
                src="/company-logo/abu-fatima-zohra-logo.svg"
                alt="Company Logo"
                style={{
                  maxWidth: "150px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={4}>
            <nav>
              <Button onClick={scrollToTop} href="#" sx={{ color: "#c79d43" }}>
                Home
              </Button>
              <Button href="#home" sx={{ color: "#c79d43" }}>
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
