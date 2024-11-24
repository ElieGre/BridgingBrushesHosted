import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollReveal from "scrollreveal";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/aboutus.css";
import image1 from "../Images/exhibition1.jpg";
import image2 from "../Images/exhibition2.jpg";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({
    abouttext1: `Join us in crafting solid bridges that bring art and culture to new horizons!
    Founded by Danielle Moussalli, Bridging Brushes emerged from her vibrant career in film production across the Middle East, particularly in Lebanon. After relocating to Washington, D.C., Danielle discovered a dynamic art scene that inspired her to shift her focus toward curating and promoting art and cultural projects.
    Established in 2024, Bridging Brushes is dedicated to creating bespoke artistic and cultural events. Collaborating with artists, writers, filmmakers, and designers, we bring each project to life with creativity and purpose, opening new horizons for artists.
    Bridging Brushes is here to forge meaningful connections, find unique opportunities, and reach new audiences. We support artists in thriving and expanding their reach while providing galleries, buyers, and distributors with a reliable partner to handle logistics and ensure each project unfolds seamlessly.`,
    aboutimg1: image1,
    aboutimg2: image2,
    aboutimg3: null, // Optional fallback for additional images
  });

  const [contactData, setContactData] = useState({
    contact_facebook_link: "https://facebook.com/bridgingbrushes",
    contact_instagram_link: "https://instagram.com/bridgingbrushes",
    contact_youtube_link: "https://youtube.com/bridgingbrushes",
    contact_pinterest_link: "https://pinterest.com/bridgingbrushes",
  });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/about/"
        );
        if (response.data?.length) setAboutData(response.data[0]);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    const fetchContactData = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/contact123/"
        );
        setContactData(response.data || contactData);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchAboutData();
    fetchContactData();
  }, []);

  if (!aboutData || !contactData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="aboutus-container">
      <section className="aboutus-sec-01">
        <div className="aboutus-inner-container">
          <h2 className="aboutus-main-title">About Us</h2>
          <div className="aboutus-content">
            <div className="aboutus-image">
              <img
                src={aboutData.aboutimg1 || image1}
                alt="Exhibition"
                loading="lazy"
              />
            </div>
            <div className="aboutus-text-box">
              <h3>Welcome to Bridging Brushes</h3>
              <p>
                Join us in crafting solid bridges that bring art and culture to
                new horizons!
              </p>
              <p>
                Founded by Danielle Moussalli, Bridging Brushes is dedicated to
                creating bespoke artistic and cultural events. We collaborate
                with artists, writers, filmmakers, and designers to bring each
                project to life, opening new horizons for creators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus-sec-03">
        <div className="aboutus-inner-container">
          <h3 className="aboutus-section-title">Follow Us</h3>
          <div className="aboutus-content">
            <div className="aboutus-media-info">
              <ul>
                <li>
                  <a
                    href={contactData.contact_facebook_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={contactData.contact_instagram_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={contactData.contact_youtube_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-youtube"></i> YouTube
                  </a>
                </li>
                <li>
                  <a
                    href={contactData.contact_pinterest_link}
                    className="aboutus-icon"
                  >
                    <i className="fab fa-pinterest"></i> Pinterest
                  </a>
                </li>
              </ul>
            </div>
            <div className="aboutus-image">
              <img
                src={aboutData.aboutimg3 || image2}
                alt="Community"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
