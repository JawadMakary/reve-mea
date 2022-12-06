import React, { useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import "./Contact.css";
import Bot from "../../components/Bot";
import RegisterYourInterest from "../../components/RegisterYourInterest";
const Contact = () => {
  const [botSelect, setBotSelect] = useState(false);
  return (
    <div className="contact_us">
      <Header />
      <Banner bg={"https://i.imgur.com/TsuZbL5.jpg"} title={"Contact Us"} showButtons={false} />
      <div class="container">
        <form class="form">
          <span class="form-title">
          Pick your suitable plan. Contact us to ensure a premium property investment experience.
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
    
      <div className="bot" onClick={() => setBotSelect(!botSelect)}>
        {!botSelect ? <ChatIcon style={{ "color": "#fff" }} /> : <CloseIcon style={{ "color": "#fff" }} />}
      </div>
      {botSelect ? <Bot /> : ""}
      <RegisterYourInterest/>
      <Footer />
    </div>
  );
};

export default Contact;
