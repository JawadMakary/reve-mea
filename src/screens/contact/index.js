import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <Banner title={"Contact Us"} showButtons={false} />
      <Footer />
    </div>
  );
};

export default Contact;
