import React from "react";
import "./ContactUs.css";

const ContactUsMap = () => {
  return (
    <div className="contactUs-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18435.274198224786!2d77.59988346399813!3d12.908124940931364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc4200bfe1%3A0x987ebf87e35428b5!2sBTM%202nd%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1747575328223!5m2!1sen!2sin"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactUsMap;
