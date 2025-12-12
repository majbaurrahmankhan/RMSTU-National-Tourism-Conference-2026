
import React, { useEffect, useState } from "react";
import "./PlenarySpeakers.css";
import speakersData from "../assets/data/speakers.json";

// importAll helper for images
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

// load all images from src/assets/images
const images = importAll(require.context("../assets/images", false, /\.(png|jpe?g|svg)$/));

const PlenarySpeakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    setSpeakers(speakersData);
  }, []);

  return (
    <section id="plenaryspeakers" className="plenary-speakers">
      <h2 className="section-title">Plenary Speakers</h2>
      <div className="speaker-cards">
        {speakers.map((speaker, index) => {
          const imgSrc = images[speaker.image]; // get image from map
          return (
            <div
              className="speaker-card"
              key={index}
              onClick={() => window.open(speaker.link || "https://www.google.com", "_blank")}
            >
              {imgSrc ? (
                <img src={imgSrc} alt={speaker.name} className="speaker-image" />
              ) : (
                <div className="speaker-placeholder">No Image</div>
              )}
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-designation">{speaker.designation}</p>
              <p className="speaker-university">{speaker.university}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlenarySpeakers;
