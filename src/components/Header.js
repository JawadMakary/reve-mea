// //_rfce
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
import { useState } from "react";
// import Image from "next/image";
import "./Header.css";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
// import { useRouter } from "next/dist/client/router";
function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  // useRouter-> same as reactJs router
  //   const router = useRouter();
  // configuration for date range
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const [nbOfGuests, setNbOfGuests] = useState(1);
  const search = () => {
    // router.push({
    //   pathname: "/search",
    //   //data shared to search page
    //   query: {
    //     location: searchInput,
    //     startDate: startDate.toISOString(),
    //     endDate: endDate.toISOString(),
    //     nbOfGuests: nbOfGuests,
    //   },
    // });
  };

  return (
    // on 768px => md:px-10
    <header className="">
      <div className="header__container">
        <img className="header__logo" src="https://i.imgur.com/USS46Ob.png" />
      </div>
      {/* middle */}
      {/* <div className="header__center ">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className="header__search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="search__icon " />
      </div> */}
      {/* right */}
      {/* tailwind-> first design for mobile then change for medium (md) */}
      <div className="header__right">
        <p className="header__item">Off-Plan</p>
        <p className="header__item">Residential</p>
        <p className="header__item">Commercial</p>
        <p className="header__item">Holiday Homes</p>
        <p className="header__item">Mortgage Services </p>
        <ul className="header-items">
          <li className="header-item has-sub" tabIndex="0">
            Explore More
            <ul className="header-sub-items">
              <li className="header-sub-item">
                <a href="#">About Us</a>
              </li>
              <li className="header-sub-item">
                <a href="#">Guides</a>
              </li>
              <li className="header-sub-item">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;