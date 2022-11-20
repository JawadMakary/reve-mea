import React from "react";
import AboutUs from "../../components/AboutUs";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Reasons from "../../components/Reasons";
import Seniors from "../../components/Seniors";
import Service from "../../components/Service";

const About = () => {
  return (
    <div>
      <Header />
      <Banner title={"Who We Are"} showButtons={false} />
      <AboutUs />
      <Reasons />
      <Seniors/>
      {/* <Service /> */}
      <Footer />
    </div>
  );
};

export default About;
