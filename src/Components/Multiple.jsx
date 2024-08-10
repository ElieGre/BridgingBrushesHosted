import React from "react";
import Section21 from "../Components/Section21";
import Gallery from "./Gallery";
import EventsandPrograms from "./EventsandPrograms";
import "../Styles/multiple.css";

const Multiple = () => {
  return (
    <div className="background-container">
      <div className="component-shadow">
        <Section21 />
      </div>
      <div className="component-shadow">
        <Gallery />
      </div>
      <div className="component-shadow">
        <EventsandPrograms />
      </div>
    </div>
  );
};

export default Multiple;
