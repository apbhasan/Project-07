import React from "react";
import "../style.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>CS — Ticket System</h3>
          <p>
            The Ticket Management System is a streamlined platform designed to efficiently handle and track user requests, complaints, and inquiries. It allows users to create tickets with detailed descriptions of their issues, assign them to the appropriate support staff, and monitor their progress in real time. With automated status updates, priority tagging, and centralized dashboards.
          </p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Products & Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>

        <div className="footer-column footer-social">
          <h4>Social Links</h4>
          <ul>
            <li><FaTwitter /> <a href="#">@CS — Ticket System</a></li>
            <li><FaLinkedin /> <a href="#">@CS — Ticket System</a></li>
            <li><FaFacebook /> <a href="#">@CS — Ticket System</a></li>
            <li><FaEnvelope /> <a href="mailto:support@cst.com">support@cst.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
