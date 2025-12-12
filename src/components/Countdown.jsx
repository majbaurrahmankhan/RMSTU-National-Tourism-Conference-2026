import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  // Set your event date here
//   yyyy-mm-ddThh:min:sec
  const eventDate = new Date("2026-01-16T14:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <h2 className="countdown-title">Conference Countdown</h2>

      <div className="countdown-container">
        <div className="countdown-box">
          <span className="count-value">{timeLeft.days}</span>
          <span className="count-label">Days</span>
        </div>

        <div className="countdown-box">
          <span className="count-value">{timeLeft.hours}</span>
          <span className="count-label">Hours</span>
        </div>

        <div className="countdown-box">
          <span className="count-value">{timeLeft.minutes}</span>
          <span className="count-label">Minutes</span>
        </div>

        <div className="countdown-box">
          <span className="count-value">{timeLeft.seconds}</span>
          <span className="count-label">Seconds</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
