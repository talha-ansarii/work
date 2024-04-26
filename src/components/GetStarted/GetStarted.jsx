import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Craft My Events</span>
          <span className="secondaryText">
            Subscribe and find make your special day more special.
            <br />
            Find your moments now.
          </span>
          <button className="button" href>
            <a href="mailto:ksatyam.1245@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
