import React from "react";
import "./HomeFaq.css";
import HomeFaqHead from "./HomeFaqHead";
import HomeFaqAcc from "./HomeFaqAcc";
const HomeFaq = () => {
  return (
    <div className="homeFaq-container">
      <div className="homeFaq-content">
        <HomeFaqHead />
      </div>
      <div className="homeFaq-content">
        <HomeFaqAcc />
      </div>
    </div>
  );
};

export default HomeFaq;
