"use client";
import React, { useState } from "react";
import "./HomeHeader.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import rating from "@/Images/rating.png";
const HomeHeader = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homeHeader-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item">
          <div className="carousel-container">
            <img
              src="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div className="carousel-cover">
              <div className="carousel-textWrapper">
                <h6>Family Dental Care</h6>
                <h2>Elevating Smiles with Expert Care and a Gentle Touch</h2>
                <button>Book Appointment</button>
                <span>
                  Google Rating 5.0 <Image src={rating} alt="rating" />
                </span>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="carousel-container">
            <img
              src="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div className="carousel-cover">
              <div className="carousel-textWrapper">
                <h6>Family Dental Care</h6>
                <h2>Elevating Smiles with Expert Care and a Gentle Touch</h2>
                <button>Book Appointment</button>
                <span>
                  Google Rating 5.0 <Image src={rating} alt="rating" />
                </span>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="carousel-container">
            <img
              src="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div className="carousel-cover">
              <div className="carousel-textWrapper">
                <h6>Family Dental Care</h6>
                <h2>Elevating Smiles with Expert Care and a Gentle Touch</h2>
                <button>Book Appointment</button>
                <span>
                  Google Rating <strong>5.0</strong> <Image src={rating} alt="rating" />
                </span>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeHeader;
