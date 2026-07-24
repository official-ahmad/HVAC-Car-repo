import React from "react";
import "./Services.css";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  return (
    <div id="services-parent">
      <div className="services-section">
        <span>Our Services</span>
        <h2>What We Offer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>

      <div className="cards-container">

        <div className="services-card">
          <img src="/services-1.png" alt="Rental Cars" />
          <h5>Rental A Cars</h5>
          <p>
            Consectetur adipiscing elit incididunt ut labore et dolore magna
            aliqua. Risus commodo viverra maecenas.
          </p>
          <button>
            <FaArrowRight />
          </button>
        </div>


        <div className="services-card">
          <img src="/services-2.png" alt="Car Repair" />
          <h5>Car Repairing</h5>
          <p>
            Consectetur adipiscing elit incididunt ut labore et dolore magna
            aliqua. Risus commodo viverra maecenas.
          </p>
          <button>
            <FaArrowRight />
          </button>
        </div>

        <div className="services-card">
          <img src="/services-3.png" alt="Car Inspection" />
          <h5>Car Inspection</h5>
          <p>
            Consectetur adipiscing elit incididunt ut labore et dolore magna
            aliqua. Risus commodo viverra maecenas.
          </p>
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
