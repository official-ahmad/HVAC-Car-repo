import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <footer id="contact">
      <div className="contact-header">
        <h1>Contact Us Now!</h1>
        <div className="footer-btns">
          <button>(+12) 345 678 910</button>
          <button>Colorlib@gmail.com</button>
        </div>

        <div className="footer-content">
          {/* Left Side: Logo, Info & Socials */}
          <div className="footer-left">
            <img src="/logo.png" alt="Logo" />
            <p>
              Any questions? Let us know in store at 625 Gloria Union,
              California, United Stated or call us on (+1) 96 123 8888
            </p>
            <div className="social-icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-google"></i>
            </div>
          </div>

          {/* Right Side: Footer Links Columns */}
          <div className="footer-links">
            {/* Column 1 */}
            <div className="link-column">
              <h3>Infomation</h3>
              <ul>
                <li>
                  <a href="#purchase">&gt; Purchase</a>
                </li>
                <li>
                  <a href="#payment">&gt; Payemnt</a>
                </li>
                <li>
                  <a href="#shipping">&gt; Shipping</a>
                </li>
                <li>
                  <a href="#return">&gt; Return</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="link-column">
              <h3>Infomation</h3>
              <ul>
                <li>
                  <a href="#hatchback">&gt; Hatchback</a>
                </li>
                <li>
                  <a href="#sedan">&gt; Sedan</a>
                </li>
                <li>
                  <a href="#suv">&gt; SUV</a>
                </li>
                <li>
                  <a href="#crossover">&gt; Crossover</a>
                </li>
              </ul>
            </div>

            {/* Column 3 & 4 (Top Brand Multi-Column) */}
            <div className="link-column brand-column">
              <h3>Top Brand</h3>
              <div className="sub-columns">
                <ul>
                  <li>
                    <a href="#abarth">&gt; Abarth</a>
                  </li>
                  <li>
                    <a href="#acura">&gt; Acura</a>
                  </li>
                  <li>
                    <a href="#alfa-romeo">&gt; Alfa Romeo</a>
                  </li>
                  <li>
                    <a href="#audi">&gt; Audi</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#bmw">&gt; BMW</a>
                  </li>
                  <li>
                    <a href="#chevrolet">&gt; Chevrolet</a>
                  </li>
                  <li>
                    <a href="#ferrari">&gt; Ferrari</a>
                  </li>
                  <li>
                    <a href="#honda">&gt; Honda</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
