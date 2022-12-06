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
      <Banner
      bg={"https://i.imgur.com/0Aua7Ye.jpg"}
      title={"Mortgage Services"}
      showButtons={false}
      />
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
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
               Why should you collaborate with REVE MEA?
                </Typography>
              
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sharing a big knowledge and experience with over 10 years of experience, Reve MEA is your guide to choose the best property plan by answering all your questions and inquiries to get a better understanding before doing any purchase process.
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
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
              What are the advantages of property investment through a plan?
                </Typography>
               
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Property investment comes with lots of advantages, most importantly is the ability for a potentially high capital growth and hedging against inflation. In addition to being a long-term investment, it is a tangible asset value with multiple benefits such as rental income.
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
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
              How can I benefit from mortgage?
                </Typography>
               
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                It is the process of buying a property through an agreement with the lender that allows the latter to regain the property once the client fails to pay his payments. It makes it easy for a client as he pays the payment on a long-term basis with a fixed interest rate.
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
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
              What are the risks of investing in properties?
                </Typography>
              
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Even if it is the safest type of investment, the degree of risks are still found from like property damage such as abnormal weather, or market fluctuations caused by economical threats.
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
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Where is the best place to invest?
                </Typography>
              
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                REVE MEA operates in Lebanon, UAE and the United Kingdom, offering a proper consulting to deliver you the best household you need. Stay in touch with us to know about the latest projects!
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
