// src/component/Banner.jsx
import React from "react";
import "../style.css";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
   <section className="banner">
  <div className="banner-card in-progress">
    <h2>{inProgressCount}</h2>
    <p>In Progress</p>
  </div>
  <div className="banner-card resolved">
    <h2>{resolvedCount}</h2>
    <p>Resolved</p>
  </div>
</section>

  );
};

export default Banner;
