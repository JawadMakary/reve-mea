import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./constants/routes";

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
  return (
    <div className="App">
      <Router>
        <Suspense fallback={loader}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.OFFPLAN} element={<OffPlan />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.RESIDENTIAL} element={<Residential />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.HOLIDAYHOMES} element={<HolidayHomes />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.COMMERCIAL} element={<Commercial />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.MORTGAGE} element={<Mortgage />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.ABOUT} element={<About />} />
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
