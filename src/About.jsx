import React from "react";
import "./About.css";

function About() {
  const listItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Integer et nisl et massa tempor ornare vel id orci.",
    "Nunc consectetur ligula vitae nisl placerat tempus.",
    "Curabitur quis ante vitae lacus varius pretium.",
  ];

  return (
    <section className="why-choose-us">
      {/* Left Content Box with Slant Cut */}
      <div className="content-container">
        <h2>Why People Choose Us</h2>
        <p className="description">
          Duis aute irure dolorin reprehenderit s volupta velit dolore fugiat
          nulla pariatur excepteur sint occaecat cupidatat.
        </p>

        <ul className="feature-list">
          {listItems.map((item, index) => (
            <li key={index}>
              <span className="check-icon">✔</span>
              {item}
            </li>
          ))}
        </ul>

        <button className="about-btn">About Us</button>
      </div>

      {/* Right Image Container with Play Button */}
      <div className="image-container">
        <img src="/car-3.jpg" alt="Mustang Car" />
        <div className="play-btn">
          <div className="play-icon"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
