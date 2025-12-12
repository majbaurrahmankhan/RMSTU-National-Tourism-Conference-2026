import React, { useState, useEffect } from "react";
import "./Slider.css";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";


const slides = [slide1, slide2, slide3, slide4];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={slides[current]} alt="slide" className="slide-image" />
      <div className="slide-text">
        <h2>RMSTU National Tourism Conference 2026</h2>
          <em> “Tourism Tomorrow: Nature's Next Fleck to Explore”.</em>


      </div>
      
      
    </div>
  );
};

export default Slider;

