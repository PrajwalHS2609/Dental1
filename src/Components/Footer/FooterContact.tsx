import React from "react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const footerList = () => {
  return (
    <div className="footerList-container">
      <h4>Contact Us</h4>
      <div className="footerList-content">
        <span>
          <FaLocationDot className="contact-icon" />
          <b>Clinic Location</b>
        </span>
        <p>
          <a href="https://www.google.com/maps/place/BTM+2nd+Stage,+BTM+Layout,+Bengaluru,+Karnataka/@12.9081249,77.5998835,14.75z/data=!4m6!3m5!1s0x3bae14fc4200bfe1:0x987ebf87e35428b5!8m2!3d12.9083215!4d77.6050777!16s%2Fg%2F113k5t3dz?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
            BTM Layout 2nd Stage Bengaluru, Karnataka 560076
          </a>
        </p>
      </div>
      <div className="footerList-content">
        <span>
          <FaPhone className="contact-icon" />
          <b>Call Us</b>
        </span>
        <p>
          <a href="tel:9876543210">+91 9876543210</a>
        </p>
      </div>
      <div className="footerList-content">
        <span>
          <FaEnvelope className="contact-icon" />
          <b>Send a Message</b>
        </span>
        <p>
          <a href="mailto:contact@dentalcare.com">contact@dentalcare.com</a>
        </p>
      </div>
    </div>
  );
};

export default footerList;
