import React, { useState } from "react";
import "./body.css";
import PaymentSection from "../../sections/PaymentSection";
import AboutUs from "../../sections/AboutUs";
import TransportSection from "../../components/table/TransportSection";
import { Stack } from "@mui/material";
import { CustomInputField, MyForm } from "../bookingform/CustomInputField";
import Bookingform from "../bookingform/Bookingform";
import Faqs from "../../sections/Faqs";
import ContactUs from "../../sections/ContactUs";

const Body = () => {
  const Home = {
    label: "WELCOME TO ABU FATIMA ZOHRA TRAVEL AND TOURS",
    name: "Specialists in Hajj, umarah tours",
    detailDes:
      "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ لَا تُشَدُّ الرِّحَالُ إِلَّا إِلَى ثَلَاثَةِ مَسَاجِدَ الْمَسْجِدِ الْحَرَامِ وَمَسْجِدِي هَذَا وَالْمَسْجِدِ الْأَقْصَى",
    ArabicLabel: "Sahih Bukhari 1132",
  };
  const AboutUsSec = {
    name: "About Us",
    detailDes:
      "Ready to take the next step? Get in touch with us to plan your journey, and let us handle the details so you can focus on what matters most. Our dedicated team is here to help, whether it's a pilgrimage to Hajj or umarah.",
  };
  return (
    <div>
      {/* <div id="poster_div"> */}
      <img id="poster" src="/assets/kaaba pic 1.svg" alt="Kaaba Image" />
      {/* </div> */}
      <Stack
        sx={{
          padding: { xs: 5, sm: 10, lg: 20 },
          spacing: { xs: 4, sm: 6, lg: 8 },
        }}
        spacing={4}
      >
        <AboutUs data={Home} />
        <AboutUs data={AboutUsSec} />
        <PaymentSection />
        <TransportSection />
        <Bookingform />
        <Faqs />
        <ContactUs />
      </Stack>
      {/* <!-- Contact Us Section -->
      <div class="about-us-section">
        <section id="contact-us" class="content-section">
           <!-- <div class="about-us-section"> -->
            <!-- Call to Action --> */}
      {/* <h2>Contact Us</h2>
          <p>Feel free to reach out for any inquiries.</p>
          <a
            href="mailto:abufatimatravelandtour@gmail.com"
            class="contact-link"
          >
            Contact us today
          </a>{" "}
          and begin your journey with us!
          <!-- Optional Contact Button (floating) -->
          <div class="contact-button">
            <a href="mailto:abufatimatravelandtour@gmail.com">Contact Us</a>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default Body;
