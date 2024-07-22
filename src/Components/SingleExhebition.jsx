import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/single-exhebition.css"; // Make sure the file name matches
import bannerImage from "../Images/exhibition1.jpg";

const SingleExhibition = () => {
  const { exhibitionName } = useParams(); // Change id to exhibitionName to match the route parameter
  const [exhibition, setExhibition] = useState(null);

  useEffect(() => {
    const fetchExhibition = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/exhibitions/exhibition/${exhibitionName}`
        );
        setExhibition(response.data);
      } catch (error) {
        console.error("Error fetching the exhibition:", error);
      }
    };

    fetchExhibition();
  }, [exhibitionName]);

  if (!exhibition) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-exhibition-page1">
      <div
        className="banner1"
        style={{
          backgroundImage: `url(${
            exhibition.exhibition_featured1image || bannerImage
          })`,
        }}
      >
        <div className="banner-content1">
          <h1 className="exhibition-title1">{exhibition.exhibition_name}</h1>
          <div className="info-box1">
            <p className="exhibition-description1">
              {exhibition.exhibition_description}
            </p>
            <div className="exhibition-details1">
              <div className="detail-item1">
                <span className="detail-label">Opening Hours:</span>{" "}
                {exhibition.exhibition_opening_hours}
              </div>
              <div className="detail-item1">
                <span className="detail-label">Closing Hours:</span>{" "}
                {exhibition.exhibition_closing_hours}
              </div>
              <div className="detail-item1">
                <span className="detail-label">Country:</span>{" "}
                {exhibition.exhibition_country}
              </div>
              <div className="detail-item1">
                <span className="detail-label">City:</span>{" "}
                {exhibition.exhibition_city}
              </div>
              <div className="detail-item1">
                <span className="detail-label">Featured Artists:</span>
                {exhibition.exhibition_featured1name},{" "}
                {exhibition.exhibition_featured2name},{" "}
                {exhibition.exhibition_featured3name}
              </div>
            </div>
            <div className="contact-details1">
              <div className="contact-item1">
                <span className="detail-label">Contact:</span>{" "}
                exhibition@example.com
              </div>
              <div className="contact-item1">
                <span className="detail-label">Phone:</span> (123) 456-7890
              </div>
              <div className="contact-item1">
                <span className="detail-label">Location:</span> 123 Exhibition
                Road, Art City
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleExhibition;
