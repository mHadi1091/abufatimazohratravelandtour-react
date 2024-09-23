import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import SnapchatIcon from "@mui/icons-material/Snapchat";
// import TikTokIcon from "@mui/icons-material/TikTok";

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
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Box>
            {["About Us", "Contact Us", "FAQs", "Packages"].map(
              (text, index) => (
                <Link
                  key={index}
                  href={`#${text.toLowerCase().replace(/\s+/g, "-")}`}
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
              )
            )}
          </Box>
        </Grid>

        {/* Social Media Icons Section */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          {[
            {
              href: "https://www.facebook.com/profile.php?id=61564670262881",
              icon: <FacebookIcon />,
            },
            { href: "https://twitter.com", icon: <TwitterIcon /> },
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
            // { href: "https://www.snapchat.com", icon: <SnapchatIcon /> },
            // {
            //   href: "https://www.tiktok.com/@abufatimazohratravels?lang=en",
            //   icon: <TikTokIcon />,
            // },
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
