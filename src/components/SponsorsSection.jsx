import "./SponsorsSection.css";
import logo1 from "../assets/images/sponsor1.png";
import logo from "../assets/images/sponsor2.png";

const sponsors = [
  { id: 1, logo, link: "https://tourismboard.gov.bd/" },
  // { id: 2, logo, link: "https://www.google.com" }
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="sponsors-section">
      <h2 className="section-title">Sponsors & Partners</h2>

      <div className="sponsors-grid">
        {sponsors.map((item) => (
          <div 
            key={item.id} 
            className="sponsor-card" 
            onClick={() => window.open(item.link, "_blank")}
          >
            <img src={item.logo} alt="Sponsor Logo" className="sponsor-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}
