import React from "react";
import "./HomeWhy.css";
const HomeWhyContent = () => {
  return (
    <div className="homeWhyContent-container">
      <h6>Why Choose Our Dental Care</h6>
      <h2>Exceptional Service With a Personal Touch</h2>
      <p>
        Choosing the right dental provider matters. We combine expert care,
        advanced technology, and a warm atmosphere to ensure every visit is
        comfortable, efficient, and tailored to your unique needs.
      </p>
      <div className="homeWhyContent-content">
        <div className="homeWhyContent-item">
          <span>Experienced Dental</span>
          <p>Skilled care backed by years of trusted dental experience.</p>
        </div>
        <div className="homeWhyContent-item">
          <span>Advanced Technology</span>
          <p>Modern tools ensure accurate and efficient treatments.</p>
        </div>
        <div className="homeWhyContent-item">
          <span>Personalized Treatment</span>
          <p>Custom care plans made to fit your smile and lifestyle.</p>
        </div>
        <div className="homeWhyContent-item">
          <span>Family-Friendly</span>
          <p>Welcoming space for kids, teens, adults, and seniors.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyContent;
