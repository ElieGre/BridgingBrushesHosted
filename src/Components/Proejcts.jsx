import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/projects.css";
import poster1 from "../Images/Poster1.png";
import poster2 from "../Images/Poster2.jpg";
import poster3 from "../Images/Poster3.png";
import poster4 from "../Images/NevineMatar/nevine-matar-imagem.png"; // Corrected image for poster 4

const Projects = () => {
  const navigate = useNavigate();

  const posters = [
    {
      title: "SUI GENERIS SOCIETY",
      image: poster1,
      navigateTo: "/mkexheb",
    },
    {
      title: "Chromaticity",
      image: poster2,
      navigateTo: "/zmexheb",
    },
    {
      title: "Francophone World Exhibition",
      image: poster3,
      navigateTo: "/afexheb",
    },
    {
      title: "Participating artist Nevine Mattar",
      image: poster4,
      navigateTo: "/nmexheb",
    },
  ];

  return (
    <div className="projects-page-oki">
      <h1 className="projects-title-oki">Our Projects</h1>
      <div className="projects-grid-oki">
        {posters.map((poster, index) => (
          <div
            className="project-card-oki"
            key={index}
            onClick={() => navigate(poster.navigateTo)} // Handle navigation on click
          >
            <h2 className="project-title-oki">{poster.title}</h2>
            <div
              className="project-poster-oki"
              style={{ backgroundImage: `url(${poster.image})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
