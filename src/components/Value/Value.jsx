import React, { useState } from "react";

import data from "../../utils/accordion.jsx";
import "./Value.css";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
    <div className="v-title">Our Values</div>
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./valuee.png" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">


        <ProgressBar/>
        </div>
      </div>
    </section>
  );
};

export default Value;
