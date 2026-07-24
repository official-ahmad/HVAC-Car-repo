import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div id="hero-parent">
      <h3>FIND YOUR DREAM CAR</h3>
      <h1>Porsche Cayenne S</h1>
      <p>
        Experience the perfect blend of luxury and performance with the Porsche
        Cayenne S.
      </p>
      <div className="hero-section">
        <button>Explore</button>
        <h2>
          {" "}
          <strong>$399</strong>/Month
        </h2>
      </div>
      <div className="hero-buttons">
        <button className="test-drive">Test Drive</button>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
