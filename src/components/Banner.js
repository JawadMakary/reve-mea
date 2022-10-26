import React, { useState } from 'react'
import './Banner.css'
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
    <div className='banner'>
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
    </div>
  )
}

export default Banner