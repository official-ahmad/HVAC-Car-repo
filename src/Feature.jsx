import React from "react";
import "./Feature.css";

function Feature() {
  return (
    <div id="feature-parent">
      {/* Text block and buttons inside feature-content */}
      <div className="feature-content">
        <span>our Feature</span>
        <h2>We Are a Trusted Name In Auto</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>

        {/* Buttons now placed inside feature-content directly below <p> */}
        <div className="btns">
          <button className="btn1">About us</button>
          <button className="btn2">Our Partners</button>
        </div>
      </div>

      {/* Feature Image stays on the right side */}
      <div className="feature-img">
        <img src="/feature.png" alt="" />
      </div>
    </div>
  );
}

export default Feature;
