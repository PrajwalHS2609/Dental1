import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import "./AboutUs.css";
const AboutUsHeader = () => {
  return (
    <div className="aboutUsHeader-container">
      <h2>About Us</h2>
      <div className="breadcrumb">
        <b>
          <Link href={"/"}>Home</Link>
        </b>{" "}
        <MdOutlineKeyboardDoubleArrowRight className="breadArrow" />
        <b>About Us</b>
      </div>
    </div>
  );
};

export default AboutUsHeader;
