import React from "react";
import "./HomeWhy.css";

const HomeWhyImg = () => {
  return (
    <div className="homeWhyImg-container">
      <div className="homeWhyImg-content1" id="homeWhyImg-content">
        <img
          src="https://img.freepik.com/free-photo/close-up-dentist-instruments_23-2151042891.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740"
          alt=""
        />
      </div>
     <div className="homeWhyImg-wrapper">
         <div className="homeWhyImg-content2" id="homeWhyImg-content">
        <img
          src="https://img.freepik.com/free-photo/young-female-dentist-treating-patients-teeth-with-dental-microscope-dentistry-concept_169016-67451.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740"
          alt=""
        />
      </div>
      <div className="homeWhyImg-content3" id="homeWhyImg-content">
        <img
          src="https://img.freepik.com/free-photo/close-up-female-dentist-hand-examining-teeth-boy-through-microscope_23-2147905938.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid&w=740"
          alt=""
        />
      </div>
     </div>
    </div>
  );
};

export default HomeWhyImg;
