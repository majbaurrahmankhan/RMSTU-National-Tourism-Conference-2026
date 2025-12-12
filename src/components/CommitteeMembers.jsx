import React, { useEffect, useState } from "react";
import "./CommitteeMembers.css";
import committeeMembers from "../assets/data/committeeMembers.json";

function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    images[key.replace("./", "")] = r(key).default || r(key);
  });
  return images;
}

const imagesMap = importAll(require.context("../assets/images", true, /\.(png|jpe?g|svg)$/));

const CommitteeMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(committeeMembers);
  }, []);

  return (
    <section id="committeemembers" className="committee-members">
      <h2 className="section-title">Committee Members</h2>

      {members.length > 0 && (
        <>
          {/* Chairman */}
          {members.slice(0, 1).map((m, i) => (
            <div
              className="member-card chairman-card"
              key={i}
              onClick={() => window.open(m.link, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <img src={imagesMap[m.image]} alt={m.name} className="member-image" />
              <div className="member-info">
                <h3>{m.name}</h3>
                <p>{m.post}</p>
                <p>{m.designation}</p>
                <p>{m.university}</p>
              </div>
            </div>
          ))}

          {/* Others in rows */}
          {(() => {
            const others = members.slice(1);
            const rows = [];
            for (let i = 0; i < others.length; i += 3) rows.push(others.slice(i, i + 3));
            return rows.map((row, ri) => (
              <div className="members-row" key={ri}>
                {row.map((m, idx) => (
                  <div
                    className="member-card side-card"
                    key={idx}
                    onClick={() => window.open(m.link, "_blank")}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={imagesMap[m.image]} alt={m.name} className="member-image" />
                    <div className="member-info">
                      <h3>{m.name}</h3>
                      <p>{m.post}</p>
                      <p>{m.designation}</p>
                      <p>{m.university}</p>
                    </div>
                  </div>
                ))}
              </div>
            ));
          })()}
        </>
      )}
    </section>
  );
};

export default CommitteeMembers;
