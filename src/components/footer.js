import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>

<div className="shop-button">
          <button type="button">Shop</button>
        </div>
      <footer>
        <div className="Company">
          <div className="logo">{/* Add your logo here */}</div>
          <div className="company-info">
            <span className="copyright-icon">&#169;</span>
            <span className="company-name">Oil Harris 2023</span>
          </div>
        </div>

       
        <div className="social-media">
          <a href="#">
            <FaTwitter /> Twitter
          </a>
          <a href="#">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="#">
            <FaEnvelope /> Mail
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
