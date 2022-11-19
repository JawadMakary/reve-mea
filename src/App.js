import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./constants/routes";
import { getCommercial, getOffPlans, getPosts, getResident } from "./api/axios";
import SearchBar from "./components/SearchBar";
import ListPage from "./components/ListPage";
import FloatButton from "./components/FloatButton";
function App() {
  const Home = lazy(() => import("./screens/home/Home"));
  const OffPlan = lazy(() => import("./screens/offPlan/index"));
  const HolidayHomes = lazy(() => import("./screens/holidayHomes"));
  const Residential = lazy(() => import("./screens/residential/index"));
  const Commercial = lazy(() => import("./screens/commercial/index"));
  const Mortgage = lazy(() => import("./screens/mortgage/index"));
  const About = lazy(() => import("./screens/about/index"));
  const Guides = lazy(() => import("./screens/guides/index"));
  const Contact = lazy(() => import("./screens/contact/index"));
  const loader = (
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [offPl, setOffPl] = useState([]);
  const [offPlanSearch, setOffPlanSearch] = useState([]);
  const [resident, setResident] = useState([]);
  const [residentSearch, setResidentSearch] = useState([]);
  const [commercial, setCommercial] = useState([]);
  const [commercialSearch, setCommercialSearch] = useState([]);
  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        console.log(posts);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      },[]);

    getOffPlans()
      .then((jsonData) => {
        setOffPl(jsonData);
        console.log(offPl);

        return jsonData;
      })
      .then((jsonData) => {
        setOffPlanSearch(jsonData);
      });

    getResident()
      .then((jsonData) => {
        setResident(jsonData);
        console.log(offPl);

        return jsonData;
      })
      .then((jsonData) => {
        setResidentSearch(jsonData);
      });
    getCommercial()
      .then((jsonData) => {
        setCommercial(jsonData);
        console.log(offPl);

        return jsonData;
      })
      .then((jsonData) => {
        setCommercialSearch(jsonData);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={loader}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Routes>
          <Routes>
            <Route
              path={ROUTES.OFFPLAN}
              element={
                <OffPlan
                  posts={offPl}
                  setSearchResults={setOffPlanSearch}
                  searchResults={offPlanSearch}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path={ROUTES.RESIDENTIAL}
              element={
                <Residential
                  posts={resident}
                  setSearchResults={setResidentSearch}
                  searchResults={residentSearch}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path={ROUTES.HOLIDAYHOMES}
              element={
                <HolidayHomes
                  posts={posts}
                  setSearchResults={setSearchResults}
                  searchResults={searchResults}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path={ROUTES.COMMERCIAL}
              element={
                <Commercial
                  posts={commercial}
                  setSearchResults={setCommercialSearch}
                  searchResults={commercialSearch}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path={ROUTES.MORTGAGE} element={<Mortgage />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.ABOUT} element={<About />} />
          </Routes>

          <Routes>
            <Route path={ROUTES.GUIDES} element={<Guides />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
          <FloatButton />
        </Suspense>
      </Router>
      {/* <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults}/> */}
    </div>
  );
}

export default App;
