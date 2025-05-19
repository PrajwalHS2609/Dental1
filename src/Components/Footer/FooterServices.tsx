import Link from "next/link";
import React from "react";
import "./Footer.css";

const FooterServices = () => {
  return (
    <div className="footerList-container">
      <h4>Services</h4>
      <div className="footerList-content">
        <p>
          <Link href={"/"}>General Dentistry</Link>
        </p>
      </div>
      <div className="footerList-content">
        <p>
          <Link href={"/"}>Cosmetic Dentistry</Link>
        </p>
      </div>
      <div className="footerList-content">
        <p>
          <Link href={"/pediatric-dentistry"}>Pediatric Dentistry</Link>
        </p>
      </div>
      <div className="footerList-content">
        <p>
          <Link href={"/orthodontics"}>Orthodontics</Link>
        </p>
      </div>
      <div className="footerList-content">
        <p>
          <Link href={"/restorative-dentistry"}>Restorative Dentistry</Link>
        </p>
      </div>
    </div>
  );
};

export default FooterServices;
