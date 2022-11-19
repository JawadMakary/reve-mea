import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <Banner
      title={"Who We Are"}
      showButtons={false}
      />
      <Footer />
    </div>
  );
};

export default About;
