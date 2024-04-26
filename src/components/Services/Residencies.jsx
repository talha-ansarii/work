import React, { useEffect, useState } from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Services</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}></span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    const updateButtonsVisibility = () => {
      setShowPrevButton(!swiper.isBeginning);
      setShowNextButton(!swiper.isEnd);
    };

    updateButtonsVisibility();

    swiper.on('slideChange', updateButtonsVisibility);

    return () => {
      swiper.off('slideChange', updateButtonsVisibility);
    };
  }, [swiper]);

  return (
    <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()} className={`r-prevButton ${ showPrevButton? 'visible' : 'hidden'}`}>
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className={`r-prevButton ${showNextButton ? 'visible' : 'hidden'}`}>
          &gt;
        </button>
    </div>
  );
};
