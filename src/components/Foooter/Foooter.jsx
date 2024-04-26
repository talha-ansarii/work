import React from "react";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import "./Foooter.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText1">
            Our vision is to make all people <br />
            the best moments more special.
          </span>
        </div>

        {/* Right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Craft My Event</span>
          <span className="secondaryText2">
            Seven Seas Hotel,<br/>12, M2K Rd, Mangalam Place,<br/> Sector 3, Rohini, New Delhi, Delhi, 110085
          </span>
          <div className="flexCenter f-menu">
            <div className="phone-number secondaryText1">
              <FaPhone /> Phone No: +91 8860605487
            </div>
            <div className="email-address secondaryText1">
              <FaEnvelope /> Email: craftmyevent.15@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
