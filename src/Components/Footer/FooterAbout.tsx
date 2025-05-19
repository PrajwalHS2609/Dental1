import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/Images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const FooterAbout = () => {
  return (
    <div className="footerAbout-container">
      <Image src={logo} alt="logo" />
      <p>
        At Dentia, we’re dedicated to providing high-quality, personalized
        dental care for patients of all ages. Our skilled team uses the latest
        technology to ensure comfortable, efficient treatments and beautiful,
        healthy smiles for life.
      </p>
      <div className="footerAbout-social">
        <Link href={"/"}>
          <FaFacebook className="social-Icon"/>
        </Link>
        <Link href={"/"}>
          <FaWhatsapp className="social-Icon"/>
        </Link>
        <Link href={"/"}>
          <FaYoutube className="social-Icon"/>
        </Link>
        <Link href={"/"}>
          <FaInstagram className="social-Icon"/>
        </Link>
        <Link href={"/"}>
          <FaSquareXTwitter className="social-Icon"/>
        </Link>
      </div>
    </div>
  );
};

export default FooterAbout;
