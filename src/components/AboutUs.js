import React from "react";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__left">
        <h1 className="aboutUs__header">About Us</h1>
        <p className="aboutUs__text">
          Rêve real estate is a multilingual company located in Dubai, London
          and Beirut. We connected buyers and sellers for the past 10 years. We
          supply our clients with various services ranging from real estate
          brokerage, buyer-seller cooperation to investment and development
          consultancy. We have earned the trust of the world's most prestigious
          developer, EMAAR, for whom we became an authorised broker.
        </p>
      </div>
      <div className="aboutUs__right">
        <img className="aboutUs__img" src="https://i.imgur.com/JRt168l.jpg" alt="aboutUs" />
      </div>
    </div>
  );
}

export default AboutUs;
