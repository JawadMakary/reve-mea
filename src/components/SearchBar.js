import { SearchIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import "./SearchBar.css";
const SearchBar = ({ posts, setSearchResults }) => {
  const searchRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchRef.current.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) => post.title.toLowerCase().includes(searchRef.current.value)
      //  || post.price.includes(searchRef.current.value)
    );

    setSearchResults(resultsArray);
  };

  // const handleSearchChange = (e) => {

  // };

  return (
    <>
      <div className="search_bar_container">
        <form
          className="form_search_container"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="input__search">
            <input
              className="search__input"
              type="text"
              id="search"
              placeholder="Start Your Search"
              ref={searchRef}
            />
            <div className="search__icon__submit">
              <SearchIcon />
            </div>
          </div>
          <div className="searchIcon__container">
            {/* <SearchIcon className="search__icon " /> */}
          </div>
          <div className="search__submit">
            <input className="submit__btn" type="submit" value="Search"></input>
          </div>
          {/* <button className="search__button"> */}
          {/* </button> */}
        </form>
      </div>
    </>
  );
};
export default SearchBar;
