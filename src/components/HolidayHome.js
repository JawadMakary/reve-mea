import React from "react";
import "./HolidayHome.css";
const HolidayHome = ({ title, price, background }) => {
  return (
    <div
      className="holiday"
      style={{ background: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="holiday__overlay">
        <div className="items"></div>
        <div className="items head">
          <p>{title}</p>
          <hr />
        </div>
        <div className="items price">
          {/* <p className="old">$699</p> */}
          <p className="new">${price}</p>
        </div>
        {/* <div className="items cart">
          <i className="fa fa-shopping-cart"></i>
          <span>ADD TO CART</span>
        </div> */}
      </div>
    </div>
  );
};

export default HolidayHome;
