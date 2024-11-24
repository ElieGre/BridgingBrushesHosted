import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/single-exhebition.css";
import bannerImage from "../Images/exhibition1.jpg";
import image1 from "../Images/AF exhibition/IMG_7317.JPG";
import image2 from "../Images/AF exhibition/IMG_7319.JPG";
import image3 from "../Images/AF exhibition/IMG_7324.JPG";
import image4 from "../Images/AF exhibition/IMG_7329.JPG";
import PdfViewer2 from "./PdfViewer2";
import MagaliCatalogue from "../Images/MagaliKatra/Exhibition-Catalog.pdf";
import MagaliBooklet from "../Images/MagaliKatra/Booklet-Artist.pdf";

const MagaliExheb = () => {
  const { exhibitionName } = useParams();
  const imageGallery = [image1, image2, image3, image4];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Static exhibition data
  const exhibition = {
    exhibition_name: "SUI Generis Society",
    exhibition_description: "“SUI Generis Society”  Solo Show by Magali Katra ",
    exhibition_artist: "Solo Show by Magali Katra",
    exhibition_opening_hours: "9:00 AM",
    exhibition_closing_hours: "6:00 PM",
    exhibition_inauguration: "April 5th 2024, at 5pm",
    exhibition_location: "The Ven, Embassy Row Washington DC.",
    exhibition_length: "April 29th 2024",
    exhibition_country: "United States",
    exhibition_city: "New York",
    exhibition_featured1name: "The Masterpiece",
    exhibition_featured2name: "Sculpture Showcase",
    exhibition_featured3name: "Abstract Collection",
    exhibition_featured1image: null, // Use `bannerImage` as a fallback
    exhibition_contact_email: "exhibition@example.com",
    exhibition_contact_phone: "(123) 456-7890",
    exhibition_contact_location: "123 Exhibition Road, Art City",

    // New section for the additional content
    sui_generis: {
      title: "SUI Generis Society – Solo Show by Magali Katra",
      dates: "April 5th 2024 to April 28th 2024",
      location: "Washington DC",
      about_artist: `Katra’s art is visual poetry overflowing with energy and vivacity, with a distinctive signature style. 
        The artist captures human identities, portraying people through bold graphics, assertive postures, 
        graceful fluidity, and engaging compositions. With a mastery of graphic rhythm, she holds up a mirror to 
        contemporary life and depicts the underlying core of society.
        Katra’s work has been showcased in many galleries, locally and internationally, with several projects 
        in Europe and the USA, including street art, book illustrations, and fashion design, conveying the 
        artist’s vibrant spirit and unique signature.`,
    },
  };

  const openPitch = () => setIsPitchOpen(true);
  const closePitch = () => setIsPitchOpen(false);
  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);

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
                <span className="detail-label">Artist:</span>{" "}
                {exhibition.exhibition_artist}
              </div>
              <div className="detail-item1">
                <span className="detail-label">Inauguration:</span>{" "}
                {exhibition.exhibition_inauguration}
              </div>
              <div className="detail-item1">
                <span className="detail-label">View till:</span>{" "}
                {exhibition.exhibition_length}
              </div>
              <div className="detail-item1">
                <span className="detail-label">Location:</span>{" "}
                {exhibition.exhibition_location}
              </div>
            </div>

            <div className="sui-generis-section">
              <h2>{exhibition.sui_generis.title}</h2>
              <p>
                <strong>Dates:</strong> {exhibition.sui_generis.dates}
              </p>
              <p>
                <strong>Location:</strong> {exhibition.sui_generis.location}
              </p>
              <h3>About the Artist</h3>
              <p>{exhibition.sui_generis.about_artist}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-grid">
        {imageGallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Exhibition image ${index + 1}`}
            className="grid-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      <div className="button-container">
        <button className="artist-button" onClick={openPitch}>
          Artist Pitch
        </button>
        <button className="artist-button" onClick={openGallery}>
          Artist Gallery
        </button>

        <PdfViewer2
          isOpen={isPitchOpen}
          onRequestClose={closePitch}
          pdfUrl={MagaliCatalogue}
          title="Artist Pitch"
        />

        <PdfViewer2
          isOpen={isGalleryOpen}
          onRequestClose={closeGallery}
          pdfUrl={MagaliBooklet}
          title="Artist Gallery"
        />
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default MagaliExheb;
