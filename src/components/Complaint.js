import React from "react";
import "./Complaint.css";
function Complaint() {
  return (
    <div className="complaint">
      <div className="complaint__container">
      <h1 className="complaint__header">Complaint Section</h1>

        <span className="complaint__text">
          Speak to the representative you already interacted with first. If
          you're still not pleased, it's better to get in touch with the branch
          manager so they can thoroughly look into your complaint. You can get
          in touch with us here if you have any more complaints regarding the
          service or advice you received from us. to reve@reve.com We'll need
          the following details to assist us in handling your complaint as fast
          and effectively as possible: names and addresses of you The property
          address that it may concern, together with the name and branch address
          of the representative you dealt with a phone number we can reach you
          at during the day. An explanation of your complaint in detail.
        </span>
      </div>
      <div className="complaint__img__container">
        <img className="complaint__img" src="./complaint.webp"/>
      </div>
    </div>
  );
}

export default Complaint;
