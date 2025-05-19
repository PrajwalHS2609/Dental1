import React from "react";
import "./Footer.css";
import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterServices from "./FooterServices";
import FooterLinks from "./FooterLinks";
const Footer = () => {
  return (
    <div className="footer-container">
      <FooterAbout />
      <FooterLinks />
      <FooterServices />
      <FooterContact />
    </div>
  );
};

export default Footer;
