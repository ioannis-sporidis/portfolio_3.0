import React from "react";
// import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTopBehaviour />
        <Routes>
          <Route exact path="/" element={<HomeDark />} />
          {/* <Route path="/home-light" element={<HomeLight />} /> */}
          <Route path="/home-dark" element={<HomeDark />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
