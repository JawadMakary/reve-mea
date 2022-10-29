import React, { useEffect, useState } from "react";
import "./Banner.css";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SearchBar from "./SearchBar";
import { getOffPlans, getPosts } from "../api/axios";
const Banner = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [offPl, setOffPl] = useState([]);
  // useEffect(() => {
  //   getPosts()
  //     .then((json) => {
  //       setPosts(json);
  //       return json;
  //     })
  //     .then((json) => {
  //       setSearchResults(json);
  //     });
  //   getOffPlans()
  //     .then((json) => {
  //       setOffPl(json);
  //       console.log(offPl);

  //       return json;
  //     })
  //     .then((json) => {
  //       setSearchResults(json);
  //     });
  // }, []);
  return (
    <div className="banner">
      <h1 className="banner__header">A Community You Can Call Home</h1>
      <div className="banner__cta">
        <button className="banner__btn">Off-Plan</button>
        <button className="banner__btn">Residential</button>
        <button className="banner__btn">Commercial</button>
      </div>
      <div className="banner__middle">
        {/* <SearchBar posts={posts} setSearchResults={setSearchResults}/> */}
        <span className="banner__span">
          10 Years Of Expertise In Real Estate And Property Investment
        </span>
      </div>
      {/* <div className="banner__bottom">
        <button className="banner__bottom__cta">Contact Us</button>
      </div> */}
    </div>
  );
};

export default Banner;
