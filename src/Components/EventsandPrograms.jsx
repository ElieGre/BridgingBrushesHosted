import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/eventsandprograms.css";
import imageevents from "../Images/exhibition-cow.png";
import goldline from "../Images/exhitbition-line.png";

import img1 from "../Images/MagaliKatra/mini-imagem-magali.png";
import img2 from "../Images/AF exhibition/IMG_7317.JPG";
import img3 from "../Images/ZeinaNader/mini-imagem.png";

const EventsandPrograms = () => {
  const navigate = useNavigate();

  // Static exhibition data with respective navigation paths
  const [exhibitions] = useState([
    {
      _id: "66666d0bf76f73f4cbc32f7f",
      exhibition_name: "SUI GENERIS SOCIETY",
      exhibition_description:
        "Annual art exhibition showcasing modern artworks.",
      exhibition_country: "United States",
      exhibition_city: "New York",
      exhibition_featured_image: img1,
      exhibition_opening_hours: "9:00 AM",
      exhibition_closing_hours: "6:00 PM",
      exhibition_day: "18",
      exhibition_month: "August",
      navigation_path: "/mkexheb",
    },
    {
      _id: "66667276f76f73f4cbc32fa9",
      exhibition_name: "Francophone World Exhibition",
      exhibition_description:
        "Celebrating contemporary art trends from around the world.",
      exhibition_country: "United Kingdom",
      exhibition_city: "London",
      exhibition_featured_image: img2,
      exhibition_opening_hours: "10:00 AM",
      exhibition_closing_hours: "7:00 PM",
      exhibition_day: "18",
      exhibition_month: "August",
      navigation_path: "/afexheb",
    },
    {
      _id: "66ae80464d90142166086d95",
      exhibition_name: "Chromaticity",
      exhibition_description: "An exploration of diverse artistic cultures.",
      exhibition_country: "United Kingdom",
      exhibition_city: "London",
      exhibition_featured_image: img3,
      exhibition_opening_hours: "10:00 AM",
      exhibition_closing_hours: "7:00 PM",
      exhibition_day: "18",
      exhibition_month: "August",
      navigation_path: "/znexheb",
    },
  ]);

  const handleExhibitionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="single-exhibition-page">
      <div className="events-and-programs">
        <div className="content-container">
          <div className="events-on-top">
            <h1>Events & Programs</h1>
          </div>
          <div className="all-events-123">
            {exhibitions.map((exhibition, index) => (
              <div
                key={exhibition._id}
                className={index % 2 === 0 ? "events-123" : "events-1234"}
                onClick={() =>
                  handleExhibitionClick(exhibition.navigation_path)
                }
              >
                <img
                  className={`cow-image ${index % 2 === 0 ? "" : "4"}`}
                  src={exhibition.exhibition_featured_image || imageevents}
                  alt={exhibition.exhibition_name}
                />
                <div className="right-exhibition">
                  <div className="top-exheb">
                    <h2>
                      {exhibition.exhibition_month} {exhibition.exhibition_day}
                    </h2>
                    <div className="top-top-top">
                      <h2 className="top-top-top-h2">
                        {exhibition.exhibition_opening_hours}-
                        {exhibition.exhibition_closing_hours}
                      </h2>
                      <img src={goldline} alt="" />
                    </div>
                  </div>
                  <div className="bottom-exheb">
                    <h2>{exhibition.exhibition_name}</h2>
                    <p>{exhibition.exhibition_description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="exhibiii">
            <button className="exhibiii-button">
              <p onClick={() => navigate("/projects")}>VIEW ALL EXHIBITIONS</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsandPrograms;
