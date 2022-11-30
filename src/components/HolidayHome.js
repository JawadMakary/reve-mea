import React from "react";
import "./HolidayHome.css";
const HolidayHome = ({ post }) => {
  return (
    <div
      className="holiday"
      style={{ background: `url(${post.imgUrl})`, backgroundSize: "cover" }}
    >
      <div className="holiday__overlay">
        <div className="items"></div>
        <div className="items head">
          <p>{post.title}</p>
          <hr />
        </div>
        <div className="items price">
          {/* <p className="old">$699</p> */}
          <p className="new">${post.price}</p>
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
