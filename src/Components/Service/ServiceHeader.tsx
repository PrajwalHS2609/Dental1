import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import "./Service.css";
const ServiceHeader = () => {
  return (
    <div className="serviceHeader-container">
      <h2>Our Services</h2>
      <div className="breadcrumb">
        <b>
          <Link href={"/"}>Home</Link>
        </b>{" "}
        <MdOutlineKeyboardDoubleArrowRight className="breadArrow" />
        <b>Service</b>
      </div>
    </div>
  );
};

export default ServiceHeader;
