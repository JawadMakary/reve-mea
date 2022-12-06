import React from "react";
import "./Complaint.css";
function Complaint() {
  return (
    <div className="complaint">
      <div className="complaint__container">
      <h1 className="complaint__header">Complaint Section</h1>

        <span className="complaint__text">
        We're here to hear you! Let us know if any inconvenience has occurred while dealing with us by speaking to the agent you're operating with. In addition, you can contact us on our e-mail reve@reve.com for more complaints regarding the services we're providing. In order to get your request viewed we need a full list of information: name, property address, branch address and the agent's phone number along with a letter listing your complaints! With REVE MEA, making your voice heard!
        </span>
      </div>
      <div className="complaint__img__container">
        <img className="complaint__img" src="./complaint.webp"/>
      </div>
    </div>
  );
}

export default Complaint;
