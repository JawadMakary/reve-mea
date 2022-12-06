import React from 'react'
import "./PropertyValuation.css";

const RegisterYourInterest = () => {
  return (
    <div>

    <div className="propertyValuation__container">
     

      <div className="wrapper">
        <div className="company-info">
          <h3>Register Your Interest</h3>

          <span>
          Find your favorite property and advance to the next step. Subscribe with REVE now to make all your dreams come true!
          </span>
        </div>

        <div className="contact">
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

            <p className="full">
              <label>Property Address</label>
              <input type="text" name="phone" id="phone" />

            </p>

            <p className="full">
              <button type="submit">Submit Details</button>
            </p>
          </form>
        </div>
      </div>
    </div>
 </div>
  )
}

export default RegisterYourInterest