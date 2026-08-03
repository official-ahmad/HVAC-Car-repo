import React from "react";
import "./Vehicle.css";
function Vehicle() {
  return (
    <div id="vehicle-parent">
      <div className="vehicle-heading">
        <span>Our Car</span>
        <h2>Best Vehicle Offers</h2>
      </div>
      <div className="cars">
        <div className="car">
          <img src="/car-1.jpg" alt="" />
          <div className="car-heading">
            <button>2016</button>
            <h3>Porsche cayenne turbo s</h3>
          </div>
          <div className="car-btn">
            <button className="btn">For Rent</button>
            <span>$25,000</span>
          </div>
        </div>
        <div className="car">
          <img src="/car-2.jpg" alt="" />
          <div className="car-heading">
            <button>2020</button>
            <h3>Toyota camry asv50l-jeteku</h3>
          </div>
          <div className="car-btn">
            <button className="btn">For Rent</button>
            <span>$25,000</span>
          </div>
        </div>
        <div className="car">
          <img src="/car-3.jpg" alt="" />
          <div className="car-heading">
            <button>2018</button>
            <h3>BMW X5 xDrive40d</h3>
          </div>
          <div className="car-btn">
            <button className="btn">Read More</button>
            <span>$25,000</span>
          </div>
        </div>
        <div className="car">
          <img src="/car-4.jpg" alt="" />
          <div className="car-heading">
            <button>2016</button>
            <h3>Porsche cayenne turbo s</h3>
          </div>
          <div className="car-btn">
            <button className="btn">Read More</button>
            <span>$25,000</span>
          </div>
        </div>
        <div className="car">
          <img src="/car-5.jpg" alt="" />
          <div className="car-heading">
            <button>2020</button>
            <h3>Mercedes-Benz GLE</h3>
          </div>
          <div className="car-btn">
            <button className="btn">Read More</button>
            <span>$25,000</span>
          </div>
        </div>
        <div className="car">
          <img src="/car-6.jpg" alt="" />
          <div className="car-heading">
            <button>2016</button>
            <h3>Porsche cayenne turbo s</h3>
          </div>
          <div className="car-btn">
            <button className="btn">Read More</button>
            <span>$25,000</span>
          </div>
        </div>
        <div className="car">
          <img src="/car-7.jpg" alt="" />
          <div className="car-heading">
            <button>2016</button>
            <h3>Porsche cayenne turbo s</h3>
          </div>
        </div>
        <div className="car">
          <img src="/car-8.jpg" alt="" />
          <div className="car-heading">
            <button>2016</button>
            <h3>Porsche cayenne turbo s</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
