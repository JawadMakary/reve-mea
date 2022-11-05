// //_rfce
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
import { useEffect, useState } from "react";
// import Image from "next/image";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

// import { useRouter } from "next/dist/client/router";
function Header({ placeholder }) {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [menuItemsVisibility, setMenuItemsVisibility] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 968) {
      setShowBurgerMenu(true);
    } else {
      setShowBurgerMenu(false);
    }
  }, []);




  const navigate = useNavigate();

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
    <header className="">
      <div className="header__container">
        <img
          className="header__logo"
          src="https://i.imgur.com/USS46Ob.png"
          onClick={() => navigate(ROUTES.HOME)}
        />
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
      {!showBurgerMenu ? (

     
      <div className="header__right">
        <p className="header__item" onClick={() => navigate(ROUTES.OFFPLAN)}>
          Off-Plan
        </p>
        <p
          className="header__item"
          onClick={() => navigate(ROUTES.RESIDENTIAL)}
        >
          Residential
        </p>
        <p className="header__item" onClick={() => navigate(ROUTES.COMMERCIAL)}>
          Commercial
        </p>
        <p
          className="header__item"
          onClick={() => navigate(ROUTES.HOLIDAYHOMES)}
        >
          Holiday Homes
        </p>
        <p className="header__item" onClick={() => navigate(ROUTES.MORTGAGE)}>
          Mortgage Services{" "}
        </p>
    

        <ul className="header-items">
          <li className="header-item has-sub" tabIndex="0">
            Explore More
            <ul className="header-sub-items">
              <li
                className="header-sub-item"
                onClick={() => navigate(ROUTES.ABOUT)}
              >
                <a href="">About Us</a>
              </li>
              <li
                className="header-sub-item"
                onClick={() => navigate(ROUTES.GUIDES)}
              >
                <a href="">Guides</a>
              </li>
              <li
                className="header-sub-item"
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                <a href="">Contact Us</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      ):(
        <div class="example">
<div class="menu-burger">
  <input type="checkbox" />
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
  <ul class="menu-burger__item-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
</div>
      )}
    </header>
  );
}

export default Header;


{/* <div class="example">
<div class="menu-burger">
  <input type="checkbox" />
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
  <ul class="menu-burger__item-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
</div> */}