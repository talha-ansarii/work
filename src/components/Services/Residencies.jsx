import React, { useEffect, useState } from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import Companies from "../Companies/Companies";
import { HashLink } from 'react-router-hash-link';

const Residencies = () => {
  return (
    <div id="residencies" className="r-wrapper">
    <img className="bg-img" src="/flower-bg.png"/>
    <div className="r-overlay"></div>
      <div className="paddings innerWidth r-container">
        <div className="flexColCenter r-head">
          <span className="">Our Services</span>
        </div>

          <div className="cards">
          {data.map((card, i) => (
            <HashLink smooth key={i} to={`/Pages/ServicesPages/ServicePage#service${card.id}`}>
              <div  className=" r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}></span>
                  <span>{card.price}</span>
                </span>
                <span className="nameText">{card.name}</span>
                <span className="secondaryText detailsText">{card.detail}</span>
              </div>

            </HashLink>
          ))}

          </div>
      </div>
      <div>

      <div className="flexColCenter r-head">
          <span className="">Our Clients</span>
        </div>
      <Companies/>
      </div>
    </div>
  );
};

export default Residencies;

