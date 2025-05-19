import React from "react";
import "./HomeAboutUs.css"
import Image from "next/image";
import check from "@/Images/check.png"
const HomeAboutUsHead = () => {
  return (
    <div className="homeAboutHeader-container">
      <h6>About Us</h6>
      <h2>Professionals and Personalized Dental Excellence</h2>
      <p>
        We offer high-quality dental care tailored for the whole family. From
        routine checkups to advanced treatments, our compassionate team ensures
        your smile stays healthy and confident.
      </p>
      <div className="homeAboutHeader-list">
        <ul>
          <li>
            <span><Image src={check} alt="check"/></span>
            <b>Personalized Treatment Plans</b>
          </li>
          <li>
            <span><Image src={check} alt="check"/></span>
            <b>State-of-the-Art Technology</b>
          </li>
          <li>
            <span><Image src={check} alt="check"/></span>
            <b>Gentle Care for Kids and Adults</b>
          </li>
          <li>
            <span><Image src={check} alt="check"/></span>
            <b>Flexible Appointment Scheduling</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeAboutUsHead;
