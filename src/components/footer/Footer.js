import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div class="footer-content">
        <div class="footer-logo">
          <img
            src="/company-logo/abu-fatima-zohra-logo.svg"
            alt="Company Logo"
            id="footer-logo"
          />
        </div>
        <div class="footer-links">
          <a href="#about-us" class="footer-link">
            About Us
          </a>
          <a href="#contact-us" class="footer-link">
            Contact Us
          </a>
          <a href="#faqs" class="footer-link">
            FAQs
          </a>
          <a href="#packages" class="footer-link">
            Packages
          </a>
        </div>
        <div class="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=61564670262881"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/abufatimazohratravelandtour/"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abufatimazohar-travelandtours-908837327/"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.youtube.com/@abufatimazohratravelandtour"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.snapchat.com"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-snapchat-ghost"></i>
          </a>
          <a
            href="https://www.tiktok.com/@abufatimazohratravels?lang=en"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Fatima Zohra Travel and Tours. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
