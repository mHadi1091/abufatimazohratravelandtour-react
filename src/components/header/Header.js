import React from "react";
import "./header.css";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <div>
      <Grid container justifyContent={"left"} alignItems={"left"}>
        <Grid item>
          <img
            src="/company-logo/abu-fatima-zohra-logo.svg"
            alt="Company Logo"
            id="company-logo"
          />
          <span id="company-name">Abu Fatima Zohra Travel and Tours</span>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <nav>
            <a href="#home" class="navi-buttons">
              Home
            </a>
            <a href="#about-us" class="navi-buttons">
              About Us
            </a>
            <a href="#packages" class="navi-buttons">
              Packages
            </a>
            {/* <a href="#contact-us" class="navi-buttons">
          Contact Us
        </a>
        <a href="#packages" class="navi-buttons">
          Packages
        </a>  */}
            <a href="#faqs" class="navi-buttons">
              FAQs
            </a>
            <a href="#contact-us" class="navi-buttons">
              Contact Us
            </a>
          </nav>
        </Grid>
      </Grid>
      <div id="search-bar">
        <Grid container>
          <Grid item>
            <input
              type="text"
              id="placeholder_search"
              placeholder="Search..."
            />
          </Grid>
          <Grid item>
            <button id="search-button">🔍</button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
