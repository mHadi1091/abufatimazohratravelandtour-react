import React, { useState, useEffect, useRef } from "react";
// import Modal from "../../Modal";
import "./body.css";
// import PaymentSection from "../../sections/PaymentSection";
import AboutUs from "../../sections/AboutUs";
import TransportSection from "../../components/table/TransportSection";
import { Stack, Box, Zoom } from "@mui/material";
import Bookingform from "../bookingform/Bookingform";
import Faqs from "../../sections/Faqs";
import ContactUs from "../../sections/ContactUs";
import HeroSlider from "../images slider/ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OffersCards from "../../sections/OfferCards";

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const bookingRef = useRef(null); // Reference to the booking section

  useEffect(() => {
    // Show the modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Intersection Observer to handle section visibility
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true, // Mark section as visible
          }));
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    // Observe each section
    const sectionIds = [
      "home",
      "about-us",
      "payment",
      "transport",
      "booking",
      "faqs",
      "contact-us",
    ];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element); // Start observing each section
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);
  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div id="page-top">
        <HeroSlider />
        {/* Other components */}
      </div>
      <Stack
        sx={{
          padding: { xs: 5, sm: 10, lg: 20 },
          spacing: { xs: 4, sm: 6, lg: 8 },
        }}
        spacing={4}
      >
        <Zoom in={visibleSections["home"]} timeout={{ enter: 800, exit: 300 }}>
          <Box id="home">
            <AboutUs data={Home} />
          </Box>
        </Zoom>
        <Zoom
          in={visibleSections["about-us"]}
          timeout={{ enter: 800, exit: 300 }}
        >
          <Box id="about-us">
            <AboutUs data={AboutUsSec} />
          </Box>
        </Zoom>
        <Zoom
          in={visibleSections["payment"]}
          timeout={{ enter: 800, exit: 300 }}
        >
          <Box id="payment">
            <OffersCards scrollToBooking={scrollToBooking} />{" "}
            {/* Pass scrollToBooking */}
          </Box>
        </Zoom>
        <Zoom
          in={visibleSections["transport"]}
          timeout={{ enter: 800, exit: 300 }}
        >
          <Box id="transport">
            <TransportSection />
          </Box>
        </Zoom>
        <Zoom
          in={visibleSections["booking"]}
          timeout={{ enter: 800, exit: 300 }}
        >
          <Box id="booking" ref={bookingRef}>
            {" "}
            {/* Set the ref to the booking section */}
            <Bookingform />
          </Box>
        </Zoom>
        <Zoom in={visibleSections["faqs"]} timeout={{ enter: 800, exit: 300 }}>
          <Box id="faqs">
            <Faqs />
          </Box>
        </Zoom>
        <Zoom
          in={visibleSections["contact-us"]}
          timeout={{ enter: 800, exit: 300 }}
        >
          <Box id="contact-us">
            <ContactUs />
          </Box>
        </Zoom>
      </Stack>
      {/* <Modal showModal={showModal} handleClose={handleCloseModal} /> */}
    </div>
  );
};

export default Body;
// payment sections and paymentcards are commented out !!!
