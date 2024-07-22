import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import ScrollReveal from "scrollreveal";
import "../Styles/single-artist.css"; // Updated CSS file name
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import artistImage from "../Images/stock_face1.png"; // Placeholder image path
import artImage1 from "../Images/image_placeholder1.png"; // Placeholder for artwork image
import artImage2 from "../Images/image_placeholder2.png"; // Placeholder for artwork image
import artImage3 from "../Images/image_placeholder3.png"; // Placeholder for artwork image
import facebook from "../Images/facebook.png";
import pinterest from "../Images/pinterest.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";
import facebookGif from "../Images/icons8-facebook.gif"; // replace with the actual path
import pinterestGif from "../Images/icons8-pinterest.gif"; // replace with the actual path
import instagramGif from "../Images/icons8-instagram.gif"; // replace with the actual path
import youtubeGif from "../Images/icons8-youtube.gif";

const SingleArtist = () => {
  const [hoveredEmoji, setHoveredEmoji] = useState({
    facebook: false,
    pinterest: false,
    instagram: false,
    youtube: false,
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });

    ScrollReveal().reveal(".left-sa img", {
      delay: 500,
      origin: "left",
    });
    ScrollReveal().reveal(
      ".right-sa .on-top-sa, .right-sa .middle-sa, .right-sa .bottom-sa",
      {
        delay: 600,
        origin: "right",
      }
    );
    ScrollReveal().reveal(".static-images-sa img", {
      delay: 700,
      origin: "bottom",
      interval: 200,
    });
    ScrollReveal().reveal(".gallery-sa", {
      delay: 800,
      origin: "top",
    });
  }, []);

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

  const paintings = [
    {
      image: artImage1,
      title: "Sunset Vista",
      type: "Oil on Canvas",
      description: "A beautiful depiction of a sunset over a serene landscape.",
    },
    {
      image: artImage2,
      title: "Morning Bliss",
      type: "Acrylic on Wood",
      description:
        "Captures the peacefulness of a morning with vibrant colors.",
    },
    {
      image: artImage3,
      title: "Ocean Breeze",
      type: "Watercolor",
      description: "A calm and refreshing view of the ocean.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div className="sa">
      <div className="sa-all">
        <div className="left-sa">
          <img src={artistImage} alt="Artist" />
        </div>
        <div className="right-sa">
          <div className="on-top-sa">
            <h1>Adele Webster</h1>
            <h3>Kingston, ON</h3>
          </div>
          <div className="middle-sa">
            <h2>Booth 805</h2>
            <h2>Main</h2>
          </div>
          <div className="bottom-sa">
            <p>
              Adele is an award-winning British/Canadian artist currently based
              along the shores of Lake Ontario in Kingston. She focuses on
              gesture and color, layering washes of paint on wood panels to
              create her work, which is inspired by nature's landscapes. Using a
              minimalist style, she brings balance in an attempt to decipher the
              everyday chaos towards calm. She intends to create a mood or evoke
              a dream-like memory that one can escape into while enjoying the
              playfulness of the contemporary peaceful vista.
            </p>
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
                  <button className="button-sa">
                    <span className="span123-sa">Website</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="static-and-non-sa">
        <div className="static-images-sa">
          {paintings.map((painting, index) => (
            <img
              key={index}
              src={painting.image}
              alt={painting.title}
              className={`static-image-sa ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <div className="gallery-sa">
          <Slider ref={sliderRef} {...settings}>
            {paintings.map((painting, index) => (
              <div key={index} className="slide-sa">
                <div className="slide-content-sa">
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="painting-image-sa"
                  />
                  <div className="painting-info-sa">
                    <h3>{painting.title}</h3>
                    <p>{painting.type}</p>
                    <p>{painting.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SingleArtist;
