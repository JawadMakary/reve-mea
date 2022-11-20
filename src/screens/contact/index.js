import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <Banner title={"Contact Us"} showButtons={false} />
      <div class="container">
        <form class="form">
          <span class="form-title">
            Contact our real estate experts to discuss your needs. Our team will
            guide you throught the entire process.
          </span>
          <div class="grid">
            <div class="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div class="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="Your message goes here"
              ></textarea>
            </div>
            <button type="submit" class="btn">
              Send message
            </button>
          </div>
        </form>
        <div className="form__details">
          <img className="contact__img" src="https://i.imgur.com/ILbwtpX.jpg" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
