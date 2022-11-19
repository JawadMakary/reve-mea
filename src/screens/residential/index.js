import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HolidayHome from "../../components/HolidayHome";
import SearchBar from "../../components/SearchBar";
import "./index.css";

const Residential = ({ searchResults, posts, setSearchResults }) => {
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
      {/* <Banner posts={posts} setSearchResults={setSearchResults} /> */}
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      {/* <div className="holidays__home__container"> */}
      {/* <HolidayHome
          background={
            "https://724ee15caf23916ea8a1-3f3d4e21c42b782027ec42d076ea0e2c.ssl.cf3.rackcdn.com/x.prod/665rb494/fotos/2/164214317120d4de228b02d282d1a1709d5c618308/1642143183755e7b7dc3182f755d34295c31d321dd.jpg"
          }
          title={"holiday home in dubai , location 1  1"}
          price={300}
        />
        <HolidayHome
          background={
            "https://724ee15caf23916ea8a1-3f3d4e21c42b782027ec42d076ea0e2c.ssl.cf3.rackcdn.com/x.prod/665rb494/fotos/2/164214317120d4de228b02d282d1a1709d5c618308/1642143183755e7b7dc3182f755d34295c31d321dd.jpg"
          }
          title={"holiday home in dubai , location 1  2"}
          price={400}
        />
        <HolidayHome
          background={
            "https://724ee15caf23916ea8a1-3f3d4e21c42b782027ec42d076ea0e2c.ssl.cf3.rackcdn.com/x.prod/665rb494/fotos/2/164214317120d4de228b02d282d1a1709d5c618308/1642143183755e7b7dc3182f755d34295c31d321dd.jpg"
          }
          title={"holiday home in dubai , location 1  3"}
          price={200}
        />
        <HolidayHome
          background={
            "https://724ee15caf23916ea8a1-3f3d4e21c42b782027ec42d076ea0e2c.ssl.cf3.rackcdn.com/x.prod/665rb494/fotos/2/164214317120d4de228b02d282d1a1709d5c618308/1642143183755e7b7dc3182f755d34295c31d321dd.jpg"
          }
          title={"holiday home in dubai , location 1  4"}
          price={500}
        />
        <HolidayHome
          background={
            "https://724ee15caf23916ea8a1-3f3d4e21c42b782027ec42d076ea0e2c.ssl.cf3.rackcdn.com/x.prod/665rb494/fotos/2/164214317120d4de228b02d282d1a1709d5c618308/1642143183755e7b7dc3182f755d34295c31d321dd.jpg"
          }
          title={"holiday home in dubai , location 1  3"}
          price={200}
        /> */}
      <div className="holidays__home__container">{content}</div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Residential;
