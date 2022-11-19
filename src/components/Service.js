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
                <img src="https://i.imgur.com/6NKPrhO.png" />{" "}
              </div>
              <h4>Buyer Services</h4>
              <p>
                Looking for the property of your dream? Reve's Buyer Services
                help you in securing one. We provide you with: Initial
                consultation ,Making connections ,Negotiation ,Guidance
                ,Valuation & Post-sale
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="our-services speedup">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/KMbnpFF.png" />{" "}
              </div>
              <h4>Seller Services</h4>
              <p>
                Do you find the selling process stressful? Make a smart move and
                request our assistance. We provide you with: Pricing Your
                Property ,Marketing ,Proper communication & Confidentiality
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
            <div class="our-services backups">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/vdH9LKi.png" />{" "}
              </div>
              <h4>Concierge Services</h4>
              <p>
                So many factors make your real estate fascinating and
                exceptional, our concierge services succeed in making it so. We
                provide an Experience to the true meaning of luxury .Our agents
                will be delighted to drive you from your location to your
                property with the most luxurious automobiles anytime and
                anywhere with punctuality.{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="our-services ssl">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/v6OnUqu.png" />{" "}
              </div>
              <h4>Landlord Services</h4>
              <p>
                You will be thrilled to get to know more about our landlord
                services from Understanding your property ,valuation and
                marketing to Screening tenants
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
