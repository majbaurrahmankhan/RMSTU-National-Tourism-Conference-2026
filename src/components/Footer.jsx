import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2>RMSTU National Tourism Conference 2026</h2>
          <em> “Tourism Tomorrow: Nature's Next Fleck to Explore”.</em>
          <p>
            Organised by Rangamati Science & Technology University (RMSTU) in collaboration with Bangladesh Tourism Board (BTB).
          </p>
          
            <em>
              Designed & Developed by MRK, CU
              </em>
          
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#event-schedule">Event Schedule</a></li>
            <li><a href="#committeemembers">Committee Members</a></li>
            <li><a href="#sponsors">Sponsors & Partners</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📞 <a href="tel:+8801865357577">+8801865357577</a></p>
          <p>📞 <a href="tel:+8801681792622">+8801681792622</a></p>
          <p> ✉ <a href="  ntc@rmstu.ac.bd">  ntc@rmstu.ac.bd</a></p>
          <p>🏁 Rangamati Science & Technology University, Rangamati, Bangladesh</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 RMSTU National Tourism Conference — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
