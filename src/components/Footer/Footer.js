import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>LOCATION 1</h3>
            <p>Pincode</p>
            <p>Address 1</p>
            <p>(+91)123456789</p>
            <Link to="#" className="text-white">
              email1@restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>LOCATION 2</h3>
            <p>Pincode</p>
            <p>Address 2</p>
            <p>(+91)123456789</p>
            <Link to="#" className="text-white">
              email2@restaurant.com
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Footer;
