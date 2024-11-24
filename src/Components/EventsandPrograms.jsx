import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/eventsandprograms.css";
import imageevents from "../Images/exhibition-cow.png";
import goldline from "../Images/exhitbition-line.png";

const EventsandPrograms = () => {
  const navigate = useNavigate();

  // Static exhibition data
  const [exhibitions] = useState([
    {
      _id: "66666d0bf76f73f4cbc32f7f",
      exhibition_name: "Art Expo 2024",
      exhibition_description:
        "Annual art exhibition showcasing modern artworks.",
      exhibition_country: "United States",
      exhibition_city: "New York12",
      exhibition_featured1name: "The Masterpiece",
      exhibition_featured1image:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1717988614/w1gvjvhelbhyfxkmkdfw.jpg",
      exhibition_featured2name: "Sculpture Showcase",
      exhibition_featured2image:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1717988615/h2zncgwspmgibpug1nqx.jpg",
      exhibition_featured3name: "Abstract Collection",
      exhibition_featured3image:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1717988616/lzffaovjvci9k3s9zy9j.jpg",
      exhibition_opening_hours: "9:00 AM",
      exhibition_closing_hours: "6:00 PM",
      exhibition_day: "18",
      exhibition_month: "August",
    },
    {
      _id: "66667276f76f73f4cbc32fa9",
      exhibition_name: "Contemporary Art Festival",
      exhibition_description:
        "Celebrating contemporary art trends from around the world.",
      exhibition_country: "United Kingdom",
      exhibition_city: "London",
      exhibition_featured1name: "The Innovators",
      exhibition_featured1image:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1717990001/be6xeodqgfgtjk5ikgbp.jpg",
      exhibition_featured2name: "Mixed Media Marvels",
      exhibition_featured2image:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1717990002/bahqdk1mqiodjm4qv31r.jpg",
      exhibition_featured3name: "Experimental Exhibits",
      exhibition_featured3image:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1717990004/n7iymf13iplki4itikok.jpg",
      exhibition_opening_hours: "10:00 AM",
      exhibition_closing_hours: "7:00 PM",
      exhibition_day: "18",
      exhibition_month: "August",
    },
    {
      _id: "66ae80464d90142166086d95",
      exhibition_name: "Contemporary Art Festival",
      exhibition_description:
        "Celebrating contemporary art trends from around the world.",
      exhibition_country: "United Kingdom",
      exhibition_city: "London",
      exhibition_featured1name: "The Innovator",
      exhibition_featured1image:
        "https://res.cloudinary.com/docxw6ugs/image/upload/v1722712133/vrwu0f0vkhzeezkwaw26.png",
      exhibition_featured2name: null,
      exhibition_featured2image: null,
      exhibition_featured3name: null,
      exhibition_featured3image: null,
      exhibition_opening_hours: "10:00 AM",
      exhibition_closing_hours: "7:00 PM",
      exhibition_day: "18",
      exhibition_month: "August",
    },
  ]);

  const handleExhibitionClick = (name) => {
    navigate(`/exhibitions/${encodeURIComponent(name)}`);
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
                  handleExhibitionClick(exhibition.exhibition_name)
                }
              >
                <img
                  className={`cow-image ${index % 2 === 0 ? "" : "4"}`}
                  src={
                    exhibition[`exhibition_featured${index + 1}image`] ||
                    imageevents
                  }
                  alt=""
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
              <p onClick={() => navigate("/exhibitions")}>
                VIEW ALL EXHIBITIONS
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsandPrograms;
