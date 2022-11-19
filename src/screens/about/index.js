import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Service from "../../components/Service";

const About = () => {
  return (
    <div>
      <Header />
      <Banner
      title={"Who We Are"}
      showButtons={false}
      />
      <Service/>
      <Footer />
    </div>
  );
};

export default About;
