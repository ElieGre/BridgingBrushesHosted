import React, { useState } from "react";
import "../Styles/realfooter.css";
import verticalwhite from "../Images/vertical-lign-white.png";
import facebook from "../Images/facebook.png";
import pinterest from "../Images/pinterest.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";
import facebookGif from "../Images/icons8-facebook.gif"; // replace with the actual path
import pinterestGif from "../Images/icons8-pinterest.gif"; // replace with the actual path
import instagramGif from "../Images/icons8-instagram.gif"; // replace with the actual path
import youtubeGif from "../Images/icons8-youtube.gif"; // replace with the actual path

const RealFooter = () => {
  const [hoveredEmoji, setHoveredEmoji] = useState({
    facebook: false,
    pinterest: false,
    instagram: false,
    youtube: false,
  });

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
  return (
    <div className="all-footer">
      <div className="footer1">
        <div className="location-footer1">
          <div className="location1">
            <h2>London</h2>
            <p>15 Bolton Street London W1J 8BG</p>
          </div>
          <div className="location1">
            <h2>New York</h2>
            <p>74 Leonard Street New York, NY 10013</p>
          </div>
        </div>
        <div className="copyrightbottom">
          <nav>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
            <li>@2024 Bridgin Bushes</li>
            <li>
              <a href="/Contactus">Contact</a>
            </li>
          </nav>
        </div>
      </div>
      <div className="footer2">
        <img src={verticalwhite} alt="" />
      </div>
      <div className="footer3">
        <div className="emojis">
          <nav>
            <li>
              <a href="https://www.facebook.com/">
                {" "}
                {/* Target URL for Facebook */}
                <div
                  className="white-emoji"
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
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/"></a>
              <div
                className="white-emoji"
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
              <a href="https://www.instagram.com/"></a>

              <div
                className="white-emoji"
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
              <a href="https://www.youtube.com/"></a>

              <div
                className="white-emoji"
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
        </div>
        <div className="stay-up">
          <p>
            Stay up-to-date on Bridging Brushes artists, exhibitions,and events.
          </p>
        </div>
        {/* <div className="subscribe-footer"> */}
        <button className="button">
          <span className="span123">SUBSCRIBE</span>
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default RealFooter;
