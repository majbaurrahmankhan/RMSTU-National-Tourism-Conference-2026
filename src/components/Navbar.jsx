import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#keydates">Key Dates</a></li>
        <li><a href="#abstractsection">Submit Abstract</a></li>
        <li><a href="#event-schedule">Event Schedule</a></li>
        <li><a href="#plenaryspeakers">Speakers</a></li>
        <li><a href="#committeemembers">Committee Members</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><a href="#about-ntc">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
