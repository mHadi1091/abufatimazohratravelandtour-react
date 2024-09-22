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
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about-us" },
                { label: "Packages", href: "#packages" },
                { label: "FAQs", href: "#faqs" },
                { label: "Contact Us", href: "#contact-us" },
              ].map((link, index) => (
                <Button
                  key={index}
                  href={link.href}
                  sx={{
                    color: "#c79d43",
                    marginLeft: 2,
                    textTransform: "none",
                    "&:hover": { color: "#c79d43" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
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
