import React, { useState } from "react";
import "./AbstractSubmit.css";
import ModalBox from "./ModalBox";

import abs1 from "../assets/images/abs11.jpg";
import abs2 from "../assets/images/abs22.jpg";
import abs3 from "../assets/images/abs33.jpg";
import abs4 from "../assets/images/abs44.jpg";

const AbstractSubmit = () => {
  const [modalData, setModalData] = useState(null);

  // const guidelinesText = `Each registrant may submit one abstract...`; // keep your full guidelines
  // const templateText = `CONCISE AND INFORMATIVE TITLE...`; // your template text



  // Submission guidelines text
  const guidelinesText = `Each registrant may submit one abstract of his or her presentation during the conference. Please take note that all abstracts will be reviewed by the scientific committee. They will decide on the final acceptance for presentation for each abstract. All registrants will be advised accordingly by 20th April 2025. Selected abstracts will ONLY be accepted upon receipt of registration and payment for the conference fee.

Abstracts

1. All abstracts must be in ENGLISH, the combined length of the abstract title, list of authors, and body should not exceed 300 words. Please be sure to carefully check your abstract for content errors, spelling, names, etc. before submitting. The organizing team does not proofread for correct spelling, typographical, grammatical, or scientific errors, nor can changes be made once the abstract is submitted.

2. Title should be brief, in bold capital letters at the top of the abstract.

3. Author(s) should be listed by surname (underline) and initials, with the presenting author’s name underlined. The designation and organization should immediately follow the authors’ names. (Organization/Institute, department, city, state, country of author).

4. Text must be typed single-spaced, font 12 Arial with only the left margin justified

5. Leave one line between the title/author/institution and the body of the abstract.

6. Each abstract should contain: (a) an introductory sentence indicating the objective of the abstract (b) main content, including methods and results if relevant and (c) conclusions. It is expected that the abstract will include the summary of the original presentation.

7. Graphs, tables and illustration cannot be included in the abstract.

8. The abstract document MUST BE in PDF/WORD.doc format. Any other file type WILL NOT be accepted.

9. Abstracts must be submitted by abstract submission portal as Microsoft Word attachment.`;

  // Abstract template text
  const templateText = `
                           CONCISE AND INFORMATIVE TITLE THAT CLEARLY REFLECTS THE CORE TOPIC OF YOUR RESEARCH
First Author Name (Presenting Author)*, Second Author Name, Third Author Name.

Correspondence: Corresponding Author Designation, Department, University/Institute, City, Country, Email: corresponging.author@institution.edu.

Background: Provide a brief background of the study or the scientific problem you are addressing. Mention any relevant statistics, gaps in the literature, or importance of the subject area. (3–4 sentences)

Objective and Methodology: Clearly state the aim of your research. Follow this by outlining the key methods used—types of data, samples, instruments or tools for analysis (e.g., spectroscopy, chromatography, gene expression techniques, etc.). Mention experimental models if used (e.g., in vitro, animal models). (4–6 sentences)

Results: Summarize the key findings of your research. Include any observed effects, statistically significant outcomes, molecular or biochemical changes, and their potential implications. Mention how the findings contribute to the field or can be applied practically or clinically. (5–7 sentences)

Key words: List 4–6 relevant keywords separated by commas (e.g., biomarker, gene regulation, nanotechnology, oxidative stress)`;





  const topics = [
    "Tourism and Hospitality: Exploring the Future of Tourism",
    "Tourism Marketing: Strategies for Promoting Tourism",
    "Tourism Management: Innovations in Managing Tourism",
    "Mountain Tourism: Opportunities in Mountainous Regions",
    "Biodiversity in Tourism: The role of biodiversity Conservation in tourism",
    "Tourism Informatics: Harnessing Technology to Transform the Tourism",
    "Application of 4IR in Tourism: Leveraging 4IR components for Smarter Tourism Solutions",
    "Green Financing in Tourism: Sustainable Funding Models for Tourism",
    "Blue Economy in Tourism: Exploring Sustainable Use of Marine Resources",
    "Alternative Forms of Tourism: Sustainable Tourism, Eco-Tourism, Culinary Tourism, Indigenous Tourism, Regenerative Tourism, Cultural Tourism and Halal Tourism",
    "Women Empowerment in Tourism: Promoting Gender Equality through the Tourism Industry",
    "Destination Management: Exploring Best Practices for Managing and Developing Tourism Destination"
  ];

  const handleRegistration = () => {
    if (window.confirm("You are about to go to the registration page. Click OK to continue.")) {
      window.open(
        "https://events.myorbit.solutions/cfp/NTC26RMSTU=TKmzTXqJe91765441393",
        "_blank"
      );
    }
  };

  return (
    <section id="abstractsection" className="abstract-section">
      <h2 className="section-title">Submit Your Abstracts</h2>

      {/* BUTTONS */}
      <div className="abstract-buttons">
        <button onClick={() => setModalData({ title: "Submission Guidelines", text: guidelinesText })}>
          Submission Guidelines
        </button>

        <button onClick={() => setModalData({ title: "Abstract Template", text: templateText })}>
          Abstract Template
        </button>

        <button className="registration-btn" onClick={handleRegistration}>
          Submit
        </button>

        <button
          onClick={() =>
            setModalData({
              title: "Abstract Submission Topics",
              text: (
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  {topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              ),
            })
          }
        >
          Abstract Submission Topics
        </button>
      </div>

      {/* CARDS */}
      <div className="abstract-cards">
        {[{ img: abs1, title: "3 Minutes Presentation" }, { img: abs2, title: "Idea Contest" }, { img: abs3, title: "Oral Presentation" }, { img: abs4, title: "Poster Presentation" }].map((item, index) => (
          <div className="abstract-card" key={index}>
            <img className="card-image" src={item.img} alt={item.title} />
            <div className="card-title"><h3>{item.title}</h3></div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalData && (
        <ModalBox
          title={modalData.title}
          text={modalData.text}
          onClose={() => setModalData(null)}
        />
      )}
    </section>
  );
};

export default AbstractSubmit;
