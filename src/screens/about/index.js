import React from "react";
import AboutUs from "../../components/AboutUs";
import Banner from "../../components/Banner";
import Careers from "../../components/Careers";
import Complaint from "../../components/Complaint";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Reasons from "../../components/Reasons";
import Seniors from "../../components/Seniors";
import Service from "../../components/Service";
import './About.css'
const About = () => {
  return (
    <div>
      <Header />
      <Banner bg={"https://i.imgur.com/RleacLw.jpg"} title={"Who We Are"} showButtons={false} />
      <AboutUs />
      <Reasons />
      <Seniors/>
      {/* <Service /> */}
      <Careers/>
      <Complaint/>
      <Footer />
    </div>
  );
};

export default About;
