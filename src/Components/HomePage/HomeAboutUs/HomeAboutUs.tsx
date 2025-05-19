import React from "react";
import "./HomeAboutUs.css";
import HomeAboutUsImg from "./HomeAboutUsImg";
import HomeAboutUsHead from "./HomeAboutUsHead";

const HomeAboutUs = () => {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-content">
        <HomeAboutUsImg/>
      </div>
      <div className="homeAbout-content">
        <HomeAboutUsHead/>
      </div>
    </div>
  );
};

export default HomeAboutUs;
