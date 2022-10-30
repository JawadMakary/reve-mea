import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const logo = "https://i.imgur.com/Sbc6Fln.jpg";

const FloatButton = () => {
  const chatMsg = "Hello there! 🤝 \n Please enter your name , email so we can help";
  const statusMsg = "Typically replies within 30 minutes";
  return (
    <FloatingWhatsApp
      phoneNumber="+96176348376"
      accountName="REVE MEA"
      chatMessage={chatMsg}
      statusMessage={statusMsg}
      allowClickAway
      notification
      notificationDelay={60000} // 1 minute
      avatar={logo}
    />
  );
};

export default FloatButton;
