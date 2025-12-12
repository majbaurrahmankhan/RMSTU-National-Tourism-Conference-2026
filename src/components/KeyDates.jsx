import React, { useState, useEffect } from 'react';
import './KeyDates.css';

import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';

const keyDatesData = [
  {
    title: "Abstract Submission Deadline",
    date: "25 Dec 2025",
    icon: icon1
  },
  {
    title: "Notification of Acceptance",
    date: "01 Jan 2026",
    icon: icon2
  },
  {
    title: "Registration Deadline",
    date: "07 Dec 2025",
    icon: icon3
  },
  {
    title: "Conference Dates",
    date: "16-17 Jan 2026",
    icon: icon4
  }
];

const KeyDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates(keyDatesData);
  }, []);

  return (
    <section id="keydates" className="key-dates">
      <h2 className='section-title'>Key Dates</h2>
      <div className="cards">
        {dates.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyDates;
