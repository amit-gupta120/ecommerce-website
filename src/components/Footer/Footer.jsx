import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Discover our extensive line of products, from tech gadgets to
            fashion essentials. Quality, variety, and affordability—shop with
            confidence for all your lifestyle needs today!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          1234 Shopping Avenue,
Citytown, Stateland,
Country, 121212
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="logo">Artosphere</div>
          <div className="copyright">
            © Copyright 2023. All Rights Reserved.
          </div>
        </div>
        <div className="right">
          <img src="/img/Payment.png" alt="" style={{ height: "85px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
