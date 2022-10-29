import { SearchIcon } from "@heroicons/react/solid";
import './SearchBar.css'
const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) => post.title.toLowerCase().includes(e.target.value)
      //  || post.price.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <>
      <div className="search__bar__container">
        <form
          className="form__search__container"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="input__search">
            <input
              className="search__input"
              type="text"
              id="search"
              placeholder="Start Your Search"
              onChange={handleSearchChange}
            />
          </div>
          <div className="searchIcon__container">
            <SearchIcon className="search__icon " />
          </div>
          {/* <button className="search__button"> */}
          {/* </button> */}
        </form>
      </div>
    </>
  );
};
export default SearchBar;
