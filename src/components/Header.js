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
          <p
            className="header__item"
            onClick={() => navigate(ROUTES.COMMERCIAL)}
          >
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
      ) : (
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li onClick={() => navigate(ROUTES.HOME)}>
              <a className="menu__item">Home</a>
            </li>
            <li>
              <a
                className="menu__item"
                onClick={() => navigate(ROUTES.OFFPLAN)}
              >
                {" "}
                Off-Plan
              </a>
            </li>

            <li onClick={() => navigate(ROUTES.RESIDENTIAL)}>
              <a className="menu__item"> Residential</a>
            </li>
            <li onClick={() => navigate(ROUTES.COMMERCIAL)}>
              <a className="menu__item"> Commercial</a>
            </li>

            <li onClick={() => navigate(ROUTES.HOLIDAYHOMES)}>
              <a className="menu__item"> Holiday Homes</a>
            </li>
            <li onClick={() => navigate(ROUTES.MORTGAGE)}>
              <a className="menu__item">Mortgage Services</a>
            </li>
            <li onClick={() => navigate(ROUTES.ABOUT)}>
              <a className="menu__item">About Us</a>
            </li>
            <li onClick={() => navigate(ROUTES.GUIDES)}>
              <a className="menu__item">Guides</a>
            </li>
            <li>
              <a
                className="menu__item"
                onClick={() => navigate(ROUTES.CONTACT)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
