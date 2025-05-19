import React from 'react'
import HomeWhyContent from './HomeWhyContent'
import HomeWhyImg from './HomeWhyImg'
import "./HomeWhy.css";

const HomeWhy = () => {
  return (
    <div className="homeWhy-container">
      <div className="homeWhy-content">
        <HomeWhyContent/>
      </div>
      <div className="homeWhy-content">
        <HomeWhyImg/>
      </div>
    </div>
  )
}

export default HomeWhy
