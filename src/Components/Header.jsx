import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import BrushLogopng from "../Images/HR_White.png";
import "../Styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility

  const handleNavigation = (path) => {
    setShowSidebar(false);
    navigate(path);
  };

  return (
    <div>
      <div className="header-box">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="header-all">
          <div className="header-title" onClick={() => navigate(`/`)}>
            <img
              src={BrushLogopng}
              className="steel-city"
              alt="Brush Logo"
              onClick={() => navigate(`/`)}
            />
          </div>
          <div className="header-center">
            <div className="header-1">
              <nav>
                <ul className="header-ul">
                  <li className="hideOnMobile">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hideOnMobile">
                    <Link to="/artists">Artists</Link>
                  </li>
                  <li className="hideOnMobile">
                    <Link className="weird-blue" to="/exhibitions">
                      Exhibitions
                    </Link>
                  </li>
                  <li className="hideOnMobile">
                    <Link className="weird-blue" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li className="hideOnMobile">
                    <Link to="/contactus">Contact</Link>
                  </li>
                </ul>
              </nav>
              {showSidebar && (
                <nav className="bigger-1">
                  <ul className="sidebar123">
                    <li onClick={() => setShowSidebar(false)}>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26"
                          viewBox="0 96 960 960"
                          width="26"
                        >
                          <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231-231 231Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="/" onClick={() => handleNavigation("/")}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/artists"
                        onClick={() => handleNavigation("/artists")}
                      >
                        Artists
                      </a>
                    </li>
                    <li>
                      <a
                        href="/exhibitions"
                        onClick={() => handleNavigation("/exhibitions")}
                      >
                        Exhibitions
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contactus"
                        onClick={() => handleNavigation("/contactus")}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
          <div className="header-2">
            <div className="image-circle">
              <img className="phone-image" alt="" />
            </div>
            <div
              className="menu-button"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48 "
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
