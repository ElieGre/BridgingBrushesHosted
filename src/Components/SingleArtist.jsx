import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import ScrollReveal from "scrollreveal";
import "../Styles/single-artist.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import artistImage from "../Images/stock_face1.png"; // Placeholder image path
import facebook from "../Images/facebook.png";
import pinterest from "../Images/pinterest.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";
import facebookGif from "../Images/icons8-facebook.gif";
import pinterestGif from "../Images/icons8-pinterest.gif";
import instagramGif from "../Images/icons8-instagram.gif";
import youtubeGif from "../Images/icons8-youtube.gif";

const SingleArtist = () => {
  const { artist_name, artist_lastname } = useParams();
  const [artist, setArtist] = useState(null);
  const [hoveredEmoji, setHoveredEmoji] = useState({
    facebook: false,
    pinterest: false,
    instagram: false,
    youtube: false,
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(
          `https://bridges-backend-ob24.onrender.com/artists/artists/${artist_name}/${artist_lastname}`
        );
        setArtist(response.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtist();
  }, [artist_name, artist_lastname]);

  // useEffect(() => {
  //   ScrollReveal({
  //     distance: "60px",
  //     duration: 2500,
  //     delay: 400,
  //     reset: true,
  //   });

  //   ScrollReveal().reveal(".left-sa img", {
  //     delay: 500,
  //     origin: "left",
  //   });
  //   ScrollReveal().reveal(
  //     ".right-sa .on-top-sa, .right-sa .middle-sa, .right-sa .bottom-sa",
  //     {
  //       delay: 600,
  //       origin: "right",
  //     }
  //   );
  //   ScrollReveal().reveal(".static-images-sa img", {
  //     delay: 700,
  //     origin: "bottom",
  //     interval: 200,
  //   });

  //   ScrollReveal().reveal(".gallery-sa", {
  //     delay: 800,
  //     origin: "top",
  //   });
  // }, []);

  const handleMouseEnter = (emoji) => {
    setHoveredEmoji((prevState) => ({
      ...prevState,
      [emoji]: true,
    }));
  };

  const handleMouseLeave = (emoji) => {
    setHoveredEmoji((prevState) => ({
      ...prevState,
      [emoji]: false,
    }));
  };

  const handleImageClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  if (!artist) return <div>Loading...</div>;

  return (
    <div className="sa">
      <div className="sa-all">
        <div className="left-sa">
          <img src={artist.artist_image || artistImage} alt="Artist" />
        </div>
        <div className="right-sa">
          <div className="on-top-sa">
            <h1>
              {artist.artist_name} {artist.artist_lastname}
            </h1>
            <h3>
              {artist.artist_country}, {artist.artist_city}
            </h3>
          </div>
          <div className="middle-sa">
            <h2>Booth 805</h2>
            <h2>Main</h2>
          </div>
          <div
            className="bottom-sa"
            style={{
              backgroundImage: `url(${artist.artist_work1})`,
              width: `50%`,
              height: `auto`,
            }}
          >
            <p>{artist.artist_about}</p>
          </div>
          <div className="website-sa"></div>
          <div className="emoji-sa">
            <div className="footer3-sa">
              <div className="emojis-sa">
                <nav>
                  <li>
                    <div
                      className="white-emoji-sa"
                      onMouseEnter={() => handleMouseEnter("facebook")}
                      onMouseLeave={() => handleMouseLeave("facebook")}
                      style={{
                        backgroundImage: `url(${
                          hoveredEmoji.facebook ? facebookGif : facebook
                        })`,
                        width: `50px`,
                        height: `50px`,
                      }}
                    ></div>
                  </li>
                  <li>
                    <div
                      className="white-emoji-sa"
                      onMouseEnter={() => handleMouseEnter("pinterest")}
                      onMouseLeave={() => handleMouseLeave("pinterest")}
                      style={{
                        backgroundImage: `url(${
                          hoveredEmoji.pinterest ? pinterestGif : pinterest
                        })`,
                        width: `50px`,
                        height: `50px`,
                      }}
                    ></div>
                  </li>
                  <li>
                    <div
                      className="white-emoji-sa"
                      onMouseEnter={() => handleMouseEnter("instagram")}
                      onMouseLeave={() => handleMouseLeave("instagram")}
                      style={{
                        backgroundImage: `url(${
                          hoveredEmoji.instagram ? instagramGif : instagram
                        })`,
                        width: `50px`,
                        height: `50px`,
                      }}
                    ></div>
                  </li>
                  <li>
                    <div
                      className="white-emoji-sa"
                      onMouseEnter={() => handleMouseEnter("youtube")}
                      onMouseLeave={() => handleMouseLeave("youtube")}
                      style={{
                        backgroundImage: `url(${
                          hoveredEmoji.youtube ? youtubeGif : youtube
                        })`,
                        width: `50px`,
                        height: `50px`,
                      }}
                    ></div>
                  </li>
                </nav>
                <button className="button-sa">
                  <span className="span123-sa">Website</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="static-and-non-sa">
        <div className="static-images-sa">
          <img
            src={artist.artist_work1}
            alt={artist.artist_work1des}
            className={`static-image-sa ${activeSlide === 0 ? "active" : ""}`}
            onClick={() => handleImageClick(0)}
          />
          <img
            src={artist.artist_work2}
            alt={artist.artist_work2des}
            className={`static-image-sa ${activeSlide === 1 ? "active" : ""}`}
            onClick={() => handleImageClick(1)}
          />
          <img
            src={artist.artist_work3}
            alt={artist.artist_work3des}
            className={`static-image-sa ${activeSlide === 2 ? "active" : ""}`}
            onClick={() => handleImageClick(2)}
          />
        </div>
        <div className="gallery-sa">
          <Slider ref={sliderRef} {...settings}>
            <div className="slide-sa">
              <div className="slide-content-sa">
                <img
                  src={artist.artist_work1}
                  alt={artist.artist_work1des}
                  className="painting-image-sa"
                />
                <div className="painting-info-sa">
                  <h3>{artist.artist_work1des}</h3>
                </div>
              </div>
            </div>
            <div className="slide-sa">
              <div className="slide-content-sa">
                <img
                  src={artist.artist_work2}
                  alt={artist.artist_work2des}
                  className="painting-image-sa"
                />
                <div className="painting-info-sa">
                  <h3>{artist.artist_work2des}</h3>
                </div>
              </div>
            </div>
            <div className="slide-sa">
              <div className="slide-content-sa">
                <img
                  src={artist.artist_work3}
                  alt={artist.artist_work3des}
                  className="painting-image-sa"
                />
                <div className="painting-info-sa">
                  <h3>{artist.artist_work3des}</h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SingleArtist;
