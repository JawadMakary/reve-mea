import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div class="container-fluid mb-5">
      <div class="text-center mt-5">
        <h1>Our Services</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <div class="our-services settings">
              <div class="icon">
                {" "}
                <img
                  className="guide__img"
                  src="https://i.imgur.com/tuutVr3.png"
                />{" "}
              </div>
              <h4>Buy With Us</h4>
              <p>
              lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="our-services settings">
              <div class="icon">
                {" "}
                <img
                  className="guide__img"
                  src="https://i.imgur.com/UjUFrMh.png"
                />{" "}
              </div>
              <h4>Sell With Us</h4>
              <p>
              lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        {/* <div class="col-md-4">
          <div class="box">
            <div class="our-services privacy">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/AgyneKA.png" />{" "}
              </div>
              <h4>Privacy</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
          </div>
        </div> */}
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <div class="our-services settings">
              <div class="icon">
                {" "}
                <img
                  className="guide__img"
                  src="https://i.imgur.com/1WvzI3I.png"
                />{" "}
              </div>
              <h4>Let With Us</h4>
              <p>
                lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="our-services settings">
              <div class="icon">
                {" "}
                <img
                  className="guide__img"
                  src="https://i.imgur.com/2YnhhUP.png"
                />{" "}
              </div>
              <h4>Rent With Us</h4>
              <p>
              lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
