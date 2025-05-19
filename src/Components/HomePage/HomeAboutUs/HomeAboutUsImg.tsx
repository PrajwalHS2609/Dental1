import Image from "next/image";
import React from "react";
import Img1 from "@/Images/homeAbout/Img1.jpg"
import Img2 from "@/Images/homeAbout/Img2.jpg"
import "./HomeAboutUs.css"
const HomeAboutUsImg = () => {
  return (
    <div className="homeAboutImg-container">
      <div className="homeAboutImg-content">
        <Image src={Img1} alt="Image1" />
      </div>
      <div className="homeAboutImg-content">
        <Image src={Img2} alt="Image2" />
      </div>
    </div>
  );
};

export default HomeAboutUsImg;
