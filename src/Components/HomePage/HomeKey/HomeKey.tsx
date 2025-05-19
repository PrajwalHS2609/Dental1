"use client";
import React from "react";
import "./HomeKey.css";
import CountUp from "react-countup";

const HomeKey = () => {
  return (
    <div className="homeKey-container">
      <div className="homeKey-content">
        <div className="homeKey-item">
          <span>
            {" "}
            <CountUp start={0} end={1200} duration={2.75} suffix="+"></CountUp>
          </span>{" "}
          <h4>Happy Patient</h4>
        </div>
        <div className="homeKey-item">
          <span>
            {" "}
            <CountUp start={0} end={1000} duration={2.75} suffix="+"></CountUp>
          </span>
          <h4>Teeth Whitened</h4>
        </div>
        <div className="homeKey-item">
          <span>
            {" "}
            <CountUp start={0} end={800} duration={2.75} suffix="+"></CountUp>
          </span>{" "}
          <h4>Dental Implants</h4>
        </div>
        <div className="homeKey-item">
          <span>
            {" "}
            <CountUp start={0} end={15} suffix="+" duration={2.75}></CountUp>
          </span>{" "}
          <h4>Years of Experience</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeKey;
