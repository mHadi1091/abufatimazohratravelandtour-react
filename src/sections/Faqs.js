import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faqs = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        backgroundColor: "#e1c699",
        padding: "40px 20px",
        borderRadius: 8,
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: "bold", color: "#c79d43" }} // Gold heading color
      >
        Frequently Asked Questions
      </Typography>

      {/* Buttons and Accordions */}
      <Grid container justifyContent="center" spacing={3}>
        {/* Hajj FAQs Accordion */}
        <Grid item xs={12} md={4}>
          <Accordion
            expanded={expanded === "hajj"}
            onChange={handleAccordionChange("hajj")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#c79d43" }} />} // Gold expand icon
              aria-controls="hajj-content"
              id="hajj-header"
            >
              <Typography sx={{ fontWeight: "bold", color: "#c79d43" }}>
                Hajj FAQs
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <strong> What is the best time to perform Hajj? </strong>
              </Typography>
              <Typography>
                <strong>
                  {" "}
                  The Hajj pilgrimage takes place in the Islamic month of
                  Dhul-Hijjah. It is a specific event that must be completed
                  during these dates.{" "}
                </strong>
              </Typography>

              <Typography>
                <strong> What documents are required for Hajj?</strong>
              </Typography>
              <Typography>
                <strong>
                  You will need a valid passport, visa, and necessary
                  vaccinations, including the meningitis vaccine.
                </strong>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Umrah FAQs Accordion */}
        <Grid item xs={12} md={4}>
          <Accordion
            expanded={expanded === "umrah"}
            onChange={handleAccordionChange("umrah")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#c79d43" }} />} // Gold expand icon
              aria-controls="umrah-content"
              id="umrah-header"
            >
              <Typography sx={{ fontWeight: "bold", color: "#c79d43" }}>
                Umrah FAQs
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <strong> What is the best time to perform Umrah?</strong>
              </Typography>
              <Typography>
                <strong>
                  Umrah can be performed at any time of the year, but the months
                  outside of Ramadan and Hajj season tend to be less crowded.
                </strong>
              </Typography>

              <Typography>
                <strong>How long does Umrah take?</strong>
              </Typography>
              <Typography>
                <strong>
                  {" "}
                  Umrah can take from a few hours to a couple of days depending
                  on your itinerary.
                </strong>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        {/* Packages FAQs Accordion */}
        <Grid item xs={12} md={4}>
          <Accordion
            expanded={expanded === "packages"}
            onChange={handleAccordionChange("packages")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#c79d43" }} />} // Gold expand icon
              aria-controls="packages-content"
              id="packages-header"
            >
              <Typography sx={{ fontWeight: "bold", color: "#c79d43" }}>
                Packages FAQs
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <strong>What is included in the Hajj package?</strong>
              </Typography>
              <Typography>
                <strong>
                  {" "}
                  Our Hajj packages include accommodation, transportation,
                  meals, and guided tours.
                </strong>
              </Typography>

              <Typography>
                <strong>Can I customize my Umrah package?</strong>
              </Typography>
              <Typography>
                <strong>
                  {" "}
                  Yes, we offer customizable packages to suit your needs,
                  including hotel upgrades and additional services.
                </strong>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};

export default Faqs;
