"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeTestimonial.css";

const HomeTestimonialCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 1, // Default for super large screens
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // Default for super large screens
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // Default for super large screens
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // Default for super large screens
    },
  };

  // const testimonials = [
  //   {
  //     name: "Michael",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum praesentium soluta.",
  //     img: "/images/michael.jpg", // Replace with actual image path or URL
  //   },
  //   {
  //     name: "Sarah",
  //     text: "Great service and excellent support. Highly recommend!",
  //     img: "/images/sarah.jpg",
  //   },
  //   {
  //     name: "John",
  //     text: "Amazing experience, will definitely come back.",
  //     img: "/images/john.jpg",
  //   },
  // ];
  return (
    <div className="testimonialCarousel-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true} // Server-side rendering
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 1s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* ------------firstSlider------------- */}
        <div>
          <div className="testimonialCarousel-wrapper">
            <div className="testimonialCarousel-imgContainer">
              <img
                src="https://img.freepik.com/free-photo/smiley-handsome-man-posing_23-2148911841.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <h5>Micheal</h5>

            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              rerum praesentium soluta".
            </p>
          </div>
        </div>
        {/* ------------secondSlider------------- */}

        <div>
          <div className="testimonialCarousel-wrapper">
            <div className="testimonialCarousel-imgContainer">
              <img
                src="https://img.freepik.com/free-photo/smiley-handsome-man-posing_23-2148911841.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <h5>John</h5>

            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              rerum praesentium soluta".
            </p>
          </div>
        </div>
        {/* ------------thirdSlider------------- */}

        <div>
          <div className="testimonialCarousel-wrapper">
            <div className="testimonialCarousel-imgContainer">
              <img
                src="https://img.freepik.com/free-photo/smiley-handsome-man-posing_23-2148911841.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <h5>Smith</h5>

            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              rerum praesentium soluta".
            </p>
          </div>
        </div>
        {/* ------------fourthSlider------------- */}

        <div>
          <div className="testimonialCarousel-wrapper">
            <div className="testimonialCarousel-imgContainer">
              <img
                src="https://img.freepik.com/free-photo/smiley-handsome-man-posing_23-2148911841.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <h5>Joe</h5>

            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              rerum praesentium soluta".
            </p>
          </div>
        </div>
        {/* ------------fifthSlider------------- */}

        <div>
          <div className="testimonialCarousel-wrapper">
            <div className="testimonialCarousel-imgContainer">
              <img
                src="https://img.freepik.com/free-photo/smiley-handsome-man-posing_23-2148911841.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <h5>Raj</h5>

            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              rerum praesentium soluta".
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeTestimonialCarousel;
