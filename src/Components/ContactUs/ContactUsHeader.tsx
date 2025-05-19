import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import "./ContactUs.css";
import Link from "next/link";
const ContactUsHeader = () => {
  return (
    <div className="contactHeader-container">
      <h2>Contact Us</h2>
      <div className="breadcrumb">
        <b>
          <Link href={"/"}>Home</Link>
        </b>{" "}
        <MdOutlineKeyboardDoubleArrowRight className="breadArrow" />
        <b>Contact Us</b>
      </div>
    </div>
  );
};

export default ContactUsHeader;
