
import React, { useState, useEffect } from "react";
import "./EventSchedule.css";
import eventsData from "../assets/data/eventSchedule.json";

const EventSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(eventsData);
  }, []);

  return (
    <section id="event-schedule" className="event-schedule">
      <h2 className="section-title">Event Schedule</h2>

      {schedule.map((day, index) => (
        <div className="schedule-day" key={index}>
          <h3 className="schedule-date">{day.date}</h3>
          <div className="schedule-cards">
            {day.events.map((item, idx) => (
              <div className="schedule-card" key={idx}>
                <div className="schedule-time">{item.time}</div>
                <div className="schedule-title">{item.title}</div>
                {item.location && <div className="schedule-location">{item.location}</div>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default EventSchedule;
