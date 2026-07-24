import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div id="navbar-parent">
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="nav-links">
        <a href="#">HOME</a>
        <a href="#">CARS</a>
        <a href="#">BLOG</a>
        <a href="#">PAGES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </div>
      <div className="nav-icons">
        <i class="fa fa-cart-plus"></i>
        <i class="fa fa-search"></i>
      </div>
      <div className="nav-button">
        <button>Add Car</button>
      </div>
    </div>
  );
}

export default Navbar;
