import React from "react";
import "./ContactVenue.css";

const ContactVenue = () => {
    return (
        <section id="contact" className="contact-venue-section">
            <h2 className="section-title">Contact & Venue</h2>

            <div className="contact-venue-container">

                {/* LEFT SIDE - CONTACT INFO */}
                <div className="contact-box">
                    <h3>Contact Us</h3>
                    <br />
                    <a href="tel:+8801865357577" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                       📞 +8801865357577
                    </a>
                    <br />
                    <a href="tel:+8801681792622" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                       📞 +8801681792622
                    </a>
                    <br /><br />

                    <a href="mailto: ntc@rmstu.ac.bd" className="px-4 py-2 bg-green-600 text-white rounded-lg">
                         ✉   ntc@rmstu.ac.bd
                    </a>

                </div>

                {/* RIGHT SIDE - GOOGLE MAP */}
                <div className="map-box">
                    <iframe
                        title="RMSTU Location"
                        src="https://www.google.com/maps?q=Rangamati+Science+and+Technology+University&hl=en&z=15&output=embed"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>


            </div>
        </section>
    );
};

export default ContactVenue;
