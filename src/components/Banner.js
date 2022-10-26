import React, { useState } from "react";
import "./Banner.css";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
const Banner = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="banner">
      <h1 className="banner__header">Find Your Property</h1>
      <div className="banner__cta">
        <button className="banner__btn">Off-Plan</button>
        <button className="banner__btn">Residential</button>
        <button className="banner__btn">Commercial</button>
      </div>
      <div className="banner__center ">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className="header__search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="search__icon " />
      </div>
      <div className="banner__bottom">
        <button className="banner__bottom__cta">Contact Us</button>
      </div>
    </div>
  );
};

export default Banner;
