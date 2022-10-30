import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MortgageCalculator from "mortgage-calculator-react";
import "./index.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Footer from "../../components/Footer";
const Mortgage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="mortgage">
      <Header />
      <Banner />
      <div className="mortgage__container">
        <div className="mortgage__left">
          <h2 className="mortgage__header">Mortgage Calculator</h2>
          <span className="mortgage__text" style={{ fontSize: "16px" }}>
            Use our mortgage calculator to estimate your monthly mortgage
            payments.
          </span>
          <span style={{ marginTop: "10px", fontStyle: "italic" }}>
            Mortgage Brokers , REVE MEA
          </span>

          <h2 className="mortgage__header mortgage__accordion__header">
            Frequently Asked Questions
          </h2>
          <div className="mortgage__accordion">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  General settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  I am an accordion
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel17"}
              onChange={handleChange("panel17")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel17bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* <img className="mortgage__image" src="https://i.imgur.com/tYEBw9w.jpg" /> */}
        </div>
        <div className="mortgage__right">
          <MortgageCalculator
            price={125000}
            downPayment={10000}
            interestRate={0.065}
            months={120}
            additionalPrincipalPayment={100}
            taxRate={0.01}
            insuranceRate={0.01}
            mortgageInsuranceEnabled={false}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mortgage;
