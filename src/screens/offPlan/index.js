import React, { useEffect } from "react";

import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HolidayHome from "../../components/HolidayHome";
import SearchBar from "../../components/SearchBar";
import "./index.css";

const OffPlans = ({ searchResults, posts, setSearchResults }) => {
  
  const results = searchResults.map((post) => (
    <HolidayHome key={post.id} post={post} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Record</p>
    </article>
  );
  // useEffect(() => {
  //   console.warn("content");
  //   console.log(content);
  // }, []);
  return (
    <div className="holidayhomes">
      <Header />
      {/* <Banner /> */}
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
    
      <div className="holidays__home__container">{content}</div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default OffPlans;
