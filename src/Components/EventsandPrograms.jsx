import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/eventsandprograms.css";
import imageevents from "../Images/exhibition-cow.png";
import goldline from "../Images/exhitbition-line.png";

const EventsandPrograms = () => {
  const [exhibitions, setExhibitions] = useState([]);

  const fetchExhibitions = async () => {
    try {
      const response = await axios.get(
        "https://bridges-backend-ob24.onrender.com/exhibitions"
      );
      setExhibitions(response.data);
    } catch (error) {
      console.error("Error fetching exhibitions:", error);
    }
  };

  useEffect(() => {
    fetchExhibitions();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="single-exhibition-page">
      <div className="events-and-programs">
        <div className="content-container">
          <div className="events-on-top">
            <h1>Events & Programs</h1>
          </div>
          <div className="all-events-123">
            {exhibitions[0] && (
              <div className="events-123">
                <img
                  className="cow-image"
                  src={exhibitions[0].exhibition_featured1image || imageevents}
                  alt=""
                />
                <div className="right-exhibition">
                  <div className="top-exheb">
                    <h2>
                      {exhibitions[0].exhibition_month}{" "}
                      {exhibitions[0].exhibition_day}
                    </h2>
                    <div className="top-top-top">
                      <h2 className="top-top-top-h2">
                        {exhibitions[0].exhibition_opening_hours}-
                        {exhibitions[0].exhibition_closing_hours}
                      </h2>
                      <img src={goldline} alt="" />
                    </div>
                  </div>
                  <div className="bottom-exheb">
                    <h2>{exhibitions[0].exhibition_name}</h2>
                    <p>{exhibitions[0].exhibition_description}</p>
                  </div>
                </div>
              </div>
            )}
            {exhibitions[1] && (
              <div className="events-1234">
                <div className="right-exhibition45">
                  <div className="top-exheb4">
                    <h2>
                      {exhibitions[1].exhibition_month}{" "}
                      {exhibitions[1].exhibition_day}
                    </h2>
                    <div className="top-top-top">
                      <h2 className="top-top-top-h2">
                        {exhibitions[1].exhibition_opening_hours}-
                        {exhibitions[1].exhibition_closing_hours}
                      </h2>
                      <img src={goldline} alt="" />
                    </div>
                  </div>
                  <div className="bottom-exheb4">
                    <h2>{exhibitions[1].exhibition_name}</h2>
                    <p>{exhibitions[1].exhibition_description}</p>
                  </div>
                </div>
                <img
                  className="cow-image4"
                  src={exhibitions[1].exhibition_featured2image || imageevents}
                  alt=""
                />
              </div>
            )}
            {exhibitions[2] && (
              <div className="events-123">
                <img
                  className="cow-image"
                  src={exhibitions[2].exhibition_featured3image || imageevents}
                  alt=""
                />
                <div className="right-exhibition">
                  <div className="top-exheb">
                    <h2>
                      {exhibitions[2].exhibition_month}{" "}
                      {exhibitions[2].exhibition_day}
                    </h2>
                    <div className="top-top-top">
                      <h2 className="top-top-top-h2">
                        {exhibitions[2].exhibition_opening_hours}-
                        {exhibitions[2].exhibition_closing_hours}
                      </h2>
                      <img src={goldline} alt="" />
                    </div>
                  </div>
                  <div className="bottom-exheb">
                    <h2>{exhibitions[2].exhibition_name}</h2>
                    <p>{exhibitions[2].exhibition_description}</p>
                  </div>
                </div>
              </div>
            )}
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
