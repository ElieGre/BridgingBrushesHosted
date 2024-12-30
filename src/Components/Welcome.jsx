import React from "react";
import Canyou from "../Images/canyou.png";
import "../Styles/welcometo.css"; // Make sure you have this CSS file
import imagecircle1 from "../Images/circle-pic-1.jpg";
import imagecircle2 from "../Images/circle-pic-2.jpg";
import imagecircle3 from "../Images/circle-pic-3.jpg";
import imagecircle4 from "../Images/circle-pic-4.jpg";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-flex">
        <div className="left-text">
          <h2>Welcome to Bridging Brushes</h2>
          <p>A place where creativity meets diversity,</p>
          <p>inspiring connections and enriching perspectives</p>
          <p>through art and culture.</p>
        </div>
        <div className="image-circle-container">
          <div className="image-circle2">
            <img src={imagecircle1} alt="Image 1" className="circle-image2" />
          </div>
          <div className="image-circle2">
            <img src={imagecircle2} alt="Image 2" className="circle-image2" />
          </div>
          <div className="image-circle2">
            <img src={imagecircle3} alt="Image 3" className="circle-image2" />
          </div>
          <div className="image-circle2">
            <img src={imagecircle4} alt="Image 4" className="circle-image2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
