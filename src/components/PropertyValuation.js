import React from "react";
import "./PropertyValuation.css";
const PropertyValuation = () => {
  return (
    <div>
      <div class="propertyValuation__container">
        <h1 class="brand">
          <span>Book a property valuation</span>
        </h1>

        <div class="wrapper">
          <div class="company-info">
            <h3>Book a property valuation</h3>

            <span>
              We have a waitlist of clients ready to view properties, extensive
              comparable community data and a trusted reputation. Just three of
              the reasons why people choose us.
            </span>
          </div>

          <div class="contact">
            <h3>E-mail Us</h3>

            <form id="contact-form">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
              </p>

              <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
              </p>

              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
              </p>

              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>

              <p class="full">
                <label>Property Address</label>
                <input type="text" name="phone" id="phone" />

              </p>

              <p class="full">
                <button type="submit">Submit Details</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyValuation;
