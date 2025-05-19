import React from "react";
import "./HomeService.css";
import HomeServiceHead from "./HomeServiceHead";
import HomeServiceMain from "./HomeServiceMain";
import Link from "next/link";

const HomeService = () => {
  return (
    <div className="homeService-container">
      <HomeServiceHead />
      <HomeServiceMain />
      <button>
        <Link href="">View More</Link>
      </button>
    </div>
  );
};

export default HomeService;
