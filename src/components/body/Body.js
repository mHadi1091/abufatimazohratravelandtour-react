import React, { useState, useEffect } from "react";
import Modal from "../../Modal";
import "./body.css";
import PaymentSection from "../../sections/PaymentSection";
import AboutUs from "../../sections/AboutUs";
import TransportSection from "../../components/table/TransportSection";
import { Stack } from "@mui/material";
import Bookingform from "../bookingform/Bookingform";
import Faqs from "../../sections/Faqs";
import ContactUs from "../../sections/ContactUs";

const Body = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const Home = {
    label: "WELCOME TO ABU FATIMA ZOHRA TRAVEL AND TOURS",
    name: "Specialists in Hajj, umrah tours",
    detailDes:
      "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ لَا تُشَدُّ الرِّحَالُ إِلَّا إِلَى ثَلَاثَةِ مَسَاجِدَ الْمَسْجِدِ الْحَرَامِ وَمَسْجِدِي هَذَا وَالْمَسْجِدِ الْأَقْصَى",
    ArabicLabel: "Sahih Bukhari 1132",
  };
  const AboutUsSec = {
    name: "About Us",
    detailDes:
      "Ready to take the next step? Get in touch with us to plan your journey, and let us handle the details so you can focus on what matters most. Our dedicated team is here to help, whether it's a pilgrimage to Hajj or umrah.",
  };
  return (
    <div>
      <img
        id="poster"
        src="/assets/herosize_kaaba_image.svg"
        alt="Kaaba Image"
      />
      <Stack
        sx={{
          padding: { xs: 5, sm: 10, lg: 20 },
          spacing: { xs: 4, sm: 6, lg: 8 },
        }}
        spacing={4}
      >
        <div id="home">
          <AboutUs data={Home} />
        </div>
        <div id="about-us">
          <AboutUs data={AboutUsSec} />
        </div>
        <div id="payment">
          <PaymentSection />
        </div>
        <div id="transport">
          <TransportSection />
        </div>
        <div id="booking">
          <Bookingform />
        </div>
        <div id="faqs">
          <Faqs />
        </div>
        <div id="contact-us">
          <ContactUs />
        </div>
      </Stack>
      <Modal showModal={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Body;
