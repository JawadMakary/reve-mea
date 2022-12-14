import React, { useEffect, useState } from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
const Banner = ({ showButtons,title }) => {
  // const [title,setTitle]=useState('')
  // const[showButtons,setShowButtons]=useState(true)
  const navigate = useNavigate();

  return (
    <div className="banner">
      <h1 className="banner__header">{title}</h1>
     {
      showButtons ?(
        <>
        <div className="banner__cta">
        <button
          className="banner__btn"
          onClick={() => navigate(ROUTES.OFFPLAN)}
        >
          Off-Plan
        </button>
        <button
          className="banner__btn"
          onClick={() => navigate(ROUTES.RESIDENTIAL)}
        >
          Residential
        </button>
        <button
          className="banner__btn"
          onClick={() => navigate(ROUTES.COMMERCIAL)}
        >
          Commercial
        </button>
      </div>
      <div className="banner__middle">
        <span className="banner__span">
          10 Years Of Expertise In Real Estate And Property Investment
        </span>
      </div>
      </>
      ):(
        ""
      )
     }
    </div>
  );
};

export default Banner;
