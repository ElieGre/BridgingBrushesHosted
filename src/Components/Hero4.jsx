import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import "../Styles/hero3.css";

const Hero4 = () => {
  const [trailerActive, setTrailerActive] = useState(false);
  const [firstPainting, setFirstPainting] = useState(null);
  const [secondPainting, setSecondPainting] = useState(null);
  const [thirdPainting, setThirdPainting] = useState(null);
  const [fourthPainting, setFourthPainting] = useState(null);
  const [activePainting, setActivePainting] = useState(null);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await axios.get(
          "https://bridges-backend-ob24.onrender.com/featuredp"
        );
        if (response.data.length > 0) {
          setFirstPainting(response.data[0] || {});
          setActivePainting(response.data[0] || {});
          if (response.data.length > 1)
            setSecondPainting(response.data[1] || {});
          if (response.data.length > 2)
            setThirdPainting(response.data[2] || {});
          if (response.data.length > 3)
            setFourthPainting(response.data[3] || {});
        }
      } catch (error) {
        console.error("Error fetching paintings:", error);
      }
    };

    fetchPaintings();
  }, []);

  useEffect(() => {
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.7.1.js";
    jqueryScript.integrity =
      "sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=";
    jqueryScript.crossOrigin = "anonymous";
    document.body.appendChild(jqueryScript);

    const materializeScript = document.createElement("script");
    materializeScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
    document.body.appendChild(materializeScript);

    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(materializeScript);
    };
  }, []);

  const toggleVideo = () => {
    const video = document.querySelector("video");
    if (video) {
      video.pause();
    }
    setTrailerActive(!trailerActive);
  };

  const changeBg = (painting) => {
    if (painting) {
      setActivePainting(painting);
      const banner = document.querySelector(".banner");
      if (banner) {
        banner.style.backgroundImage = `url(${painting.feature_image_of_painting})`;
      }
    }
  };

  useEffect(() => {
    if (firstPainting || secondPainting || thirdPainting || fourthPainting) {
      const elems = document.querySelectorAll(".carousel");
      if (elems.length > 0) {
        const options = {
          duration: 200,
          dist: 100,
          shift: 0,
          padding: 20,
          numVisible: 5,
          fullWidth: false,
          indicators: true,
          noWrap: false,
          onCycleTo: function (ele) {
            const index = Array.from(ele.parentNode.children).indexOf(ele);
            if (index === 0) changeBg(firstPainting);
            if (index === 1) changeBg(secondPainting);
            if (index === 2) changeBg(thirdPainting);
            if (index === 3) changeBg(fourthPainting);
          },
        };
        M.Carousel.init(elems, options);
      }
    }
  }, [firstPainting, secondPainting, thirdPainting, fourthPainting]);

  // Drag functionality
  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const carousel = document.querySelector(".carousel");

    const mouseDownHandler = (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
    };

    const mouseUpHandler = () => {
      isDown = false;
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 3; // Scroll-fast
      carousel.scrollLeft = scrollLeft - walk;
    };

    if (carousel) {
      carousel.addEventListener("mousedown", mouseDownHandler);
      carousel.addEventListener("mouseleave", mouseLeaveHandler);
      carousel.addEventListener("mouseup", mouseUpHandler);
      carousel.addEventListener("mousemove", mouseMoveHandler);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("mousedown", mouseDownHandler);
        carousel.removeEventListener("mouseleave", mouseLeaveHandler);
        carousel.removeEventListener("mouseup", mouseUpHandler);
        carousel.removeEventListener("mousemove", mouseMoveHandler);
      }
    };
  }, []);

  return (
    <div className="hero3">
      <div
        className="banner"
        style={{
          backgroundImage: activePainting
            ? `url(${activePainting.feature_image_of_painting})`
            : "none",
        }}
      >
        {firstPainting && activePainting === firstPainting && (
          <div className="content active">
            {/* <img
              src={firstPainting.feature_image_of_painting}
              alt=""
              className="movie-title"
            /> */}
            <h4>
              {firstPainting.feature_artist_name}{" "}
              {firstPainting.feature_artist_last_name}
            </h4>
            <h4>
              <span>2023</span>
              <span>
                <i>{firstPainting.feature_genre}</i>
              </span>
              <span>{firstPainting.feature_tag1}</span>
              <span>{firstPainting.feature_tag2}</span>
            </h4>
            <p>{firstPainting.feature_description_of_painting}</p>
            {/* <div className="buttonwww">
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={faPlay} />
                </i>{" "}
                Watch
              </a>
              <a href="">
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>{" "}
                My List
              </a>
            </div> */}
          </div>
        )}
        {secondPainting && activePainting === secondPainting && (
          <div className="content active">
            <h4>
              {secondPainting.feature_artist_name}{" "}
              {secondPainting.feature_artist_last_name}
            </h4>
            <h4>
              <span>2023</span>
              <span>
                <i>{secondPainting.feature_genre}</i>
              </span>
              <span>{secondPainting.feature_tag1}</span>
              <span>{secondPainting.feature_tag2}</span>
            </h4>
            <p>{secondPainting.feature_description_of_painting}</p>
          </div>
        )}
        {thirdPainting && activePainting === thirdPainting && (
          <div className="content active">
            <h4>
              {thirdPainting.feature_artist_name}{" "}
              {thirdPainting.feature_artist_last_name}
            </h4>
            <h4>
              <span>2023</span>
              <span>
                <i>{thirdPainting.feature_genre}</i>
              </span>
              <span>{thirdPainting.feature_tag1}</span>
              <span>{thirdPainting.feature_tag2}</span>
            </h4>
            <p>{thirdPainting.feature_description_of_painting}</p>
          </div>
        )}
        {fourthPainting && activePainting === fourthPainting && (
          <div className="content active">
            <h4>
              {fourthPainting.feature_artist_name}{" "}
              {fourthPainting.feature_artist_last_name}
            </h4>
            <h4>
              <span>2023</span>
              <span>
                <i>{fourthPainting.feature_genre}</i>
              </span>
              <span>{fourthPainting.feature_tag1}</span>
              <span>{fourthPainting.feature_tag2}</span>
            </h4>
            <p>{fourthPainting.feature_description_of_painting}</p>
          </div>
        )}
        <div className="carousel-box">
          <div className="carousel">
            {firstPainting && (
              <div
                className="carousel-item"
                onClick={() => changeBg(firstPainting)}
              >
                <img
                  src={firstPainting.feature_image_of_painting}
                  alt={firstPainting.feature_name_of_painting}
                />
              </div>
            )}
            {secondPainting && (
              <div
                className="carousel-item"
                onClick={() => changeBg(secondPainting)}
              >
                <img
                  src={secondPainting.feature_image_of_painting}
                  alt={secondPainting.feature_name_of_painting}
                />
              </div>
            )}
            {thirdPainting && (
              <div
                className="carousel-item"
                onClick={() => changeBg(thirdPainting)}
              >
                <img
                  src={thirdPainting.feature_image_of_painting}
                  alt={thirdPainting.feature_name_of_painting}
                />
              </div>
            )}
            {fourthPainting && (
              <div
                className="carousel-item"
                onClick={() => changeBg(fourthPainting)}
              >
                <img
                  src={fourthPainting.feature_image_of_painting}
                  alt={fourthPainting.feature_name_of_painting}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <ul className="sci">
        <li>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faFacebook} />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faYoutube} />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faTwitter} />
            </i>
          </a>
        </li>
      </ul>
      <div className="trailer">
        <video src="./file.mp4" muted controls autoPlay></video>
        <img
          src="./close.png"
          alt="Close"
          className="close"
          onClick={toggleVideo}
        />
      </div>
    </div>
  );
};

export default Hero4;
