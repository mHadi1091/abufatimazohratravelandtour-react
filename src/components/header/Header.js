import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div id="logo-container">
        <img
          src="/company-logo/abu-fatima-zohra-logo.svg"
          alt="Company Logo"
          id="company-logo"
        />
        <span id="company-name">Abu Fatima Zohra Travel and Tours</span>
      </div>
      <nav>
        <a href="#home" class="navi-buttons">
          Home
        </a>
        <a href="#about-us" class="navi-buttons">
          About Us
        </a>
        <a href="#contact-us" class="navi-buttons">
          Contact Us
        </a>
        <a href="#packages" class="navi-buttons">
          Packages
        </a>
        <a href="#faqs" class="navi-buttons">
          FAQs
        </a>
      </nav>
      <div id="search-bar">
        <input type="text" id="placeholder_search" placeholder="Search..." />
        <button id="search-button">🔍</button>
      </div>
    </div>
  );
};

export default Header;
