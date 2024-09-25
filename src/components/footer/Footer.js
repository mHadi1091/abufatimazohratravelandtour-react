import React from "react";
import { Box, Grid, Link, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#171d00", py: 4, px: 2 }}>
      {/* Footer Content */}
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {/* Logo Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <img
            src="/company-logo/abu-fatima-zohra-logo.svg"
            alt="Company Logo"
            style={{ maxWidth: "150px", height: "auto" }}
          />
        </Grid>

        {/* Links to sections */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Box>
            {[
              { text: "About Us", href: "#home" },
              { text: "Contact Us", href: "#contact-us" },
              { text: "FAQs", href: "#faqs" },
              { text: "Packages", href: "#payment" },
            ].map(({ text, href }, index) => (
              <Link
                key={index}
                href={href} // href corresponds to section IDs in Body component
                underline="hover"
                sx={{
                  color: "#c79d43",
                  mx: 2,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  "&:hover": { color: "#333" },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Social Media Icons Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          {[
            {
              href: "https://www.facebook.com/profile.php?id=61564670262881",
              icon: <FacebookIcon />,
            },
            {
              href: "https://www.instagram.com/abufatimazohratravelandtour/",
              icon: <InstagramIcon />,
            },
            {
              href: "https://www.linkedin.com/in/abufatimazohar-travelandtours-908837327/",
              icon: <LinkedInIcon />,
            },
            {
              href: "https://www.youtube.com/@abufatimazohratravelandtour",
              icon: <YouTubeIcon />,
            },
          ].map((social, index) => (
            <IconButton
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#c79d43", mx: 1 }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography sx={{ color: "#333" }}>
          &copy; 2024 Abu Fatima Zohra Travel and Tours. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
