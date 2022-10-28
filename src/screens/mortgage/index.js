import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MortgageCalculator from "mortgage-calculator-react";
import "./index.css";
import Footer from "../../components/Footer";
const Mortgage = () => {
  return (
    <div className="mortgage">
      <Header />
      <Banner />
      <div className="mortgage__container">
        <div className="mortgage__left">
          <h2 className="mortgage__header">Mortgage Calculator</h2>
          <span className="mortgage__text">
           Lorem ipsum dolor sit amet
          </span>
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
      <Footer/>
    </div>
  );
};

export default Mortgage;
