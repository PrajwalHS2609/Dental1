import React from "react";
import "./ContactUs.css";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const ContactUsAbout = () => {
  return (
    <div className="contactAbout-container">
      <h6>Get In Touch</h6>
      <h2>We are always ready to help you and answer your questions</h2>
      <p>
        Whether you have a question, a suggestion, or just want to say hello,
        this is the place to do it. Please fill out the form below with your
        details and message, and we'll get back to you as soon as possible.
      </p>
      <div className="contactAbout-content">
        <div className="contactAbout-item">
          <span>
            <FaClock />
            We're Open
          </span>
          <p>Monday - Friday 08.00 - 18.00</p>
        </div>
        <div className="contactAbout-item">
          <span>
            <FaLocationDot />
            Clinic Location
          </span>
          <p>
            <a href="https://www.google.com/maps/place/BTM+2nd+Stage,+BTM+Layout,+Bengaluru,+Karnataka/@12.9081249,77.5998835,14.75z/data=!4m6!3m5!1s0x3bae14fc4200bfe1:0x987ebf87e35428b5!8m2!3d12.9083215!4d77.6050777!16s%2Fg%2F113k5t3dz?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D">
              BTM Layout 2nd Stage Bengaluru, Karnataka 560076
            </a>{" "}
          </p>
        </div>
        <div className="contactAbout-item">
          <span>
            <FaPhone />
            Call Us
          </span>
          <p>
            <a href="tel:9876543210">+91 9876543210</a>
          </p>
        </div>
        <div className="contactAbout-item">
          <span>
            <FaEnvelope />
            Send a Message
          </span>
          <p>
            {" "}
            <a href="mailto:contact@dentalcare.com">contact@dentalcare.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAbout;
