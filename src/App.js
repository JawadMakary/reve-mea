import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import * as ROUTES from "./constants/routes";

function App() {
  const Home = lazy(() => import("./screens/home/Home"));
  const OffPlan = lazy(() => import("./screens/offPlan/index"));
  const HolidayHomes = lazy(() => import("./screens/holidayHomes"));
  return (
    <div className="App">
      <Router>
        <Suspense fallback={"loading ..."}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.OFFPLAN} element={<OffPlan />} />
          </Routes>
          <Routes>
            <Route path={ROUTES.HOLIDAYHOMES} element={<HolidayHomes />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
