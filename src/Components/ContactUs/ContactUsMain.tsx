import React from "react";
import "./ContactUs.css";
import ContactUsAbout from "./ContactUsAbout";
import ContactUsForm from "./ContactUsForm";

const ContactUsMain = () => {
  return (
    <div className="contactUsMain-container">
      <div className="contactUsMain-content">
        <ContactUsAbout />
      </div>
      <div className="contactUsMain-content">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsMain;
