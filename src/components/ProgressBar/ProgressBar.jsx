import React, { useState } from "react";
import "./ProgressBar.css";
import data from "../../utils/accordion.jsx";

const ProgressBar = () => {
  
  let [activePoint, setActivePoint] = useState(["1"]);

 
  const handleClick = (e, pointName) => {
    console.log("Clicked point:", pointName);
    const newArray = [...activePoint, pointName];
    setActivePoint(newArray);
  };
  return (
    <div className="p-wrapper">
      <div className="p-container">
        <div
          name="point1"
          onClick={(e) => handleClick(e, "1")}
        >
          <svg
            width="39"
            height="188"
            viewBox="0 0 39 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="19.1971"
              y1="37.4801"
              x2="19.1971"
              y2="187.4"
              stroke="#EDD3A4"
              stroke-width="3.65659"
            />
            <circle
                className="ring-svg"
              cx="19.1971"
              cy="19.1971"
              r="15.3577"
              stroke="#EDD3A4"
              stroke-width="7.67885"
            />
          </svg>
        </div>

        <div>
          <div className="p-title">{data[0].heading}</div>

          <div>
            {activePoint.includes("1") ? (<>{data[0].detail}</>):("")}
          </div>
        </div>
        <div></div>
      </div>

      <div className="p-container">
        <div
          name="point2"
          onClick={(e) => handleClick(e, "2")}
          
        >
          <svg
            width="39"
            height="93"
            viewBox="0 0 39 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="19.1971"
              y1="39.3098"
              x2="19.1971"
              y2="100.987"
              stroke={activePoint.includes("2") ? "#EDD3A4" : "#474747"}
              stroke-width="3.65659"
            />
            <circle
            className="ring-svg"
              cx="19.1971"
              cy="19.8551"
              r="15.3577"
              stroke=
                {activePoint.includes("2") ? "#EDD3A4" : "#474747"}
              stroke-width="7.67885"
            />
          </svg>
        </div>
        <div>
          <div className="p-title">
            <div className={`ring-svg ${!activePoint.includes("2") ? "active" : ""}`}>
            {data[1].heading}
            </div>
          </div>

          <div>
            {activePoint.includes("2") ? (<>{data[1].detail}</>):("")}
          </div>
        </div>
        <div></div>
      </div>
      <div className="p-container">
        <div
          name="point3"
          onClick={(e) => handleClick(e, "3")}
          
        >
          <svg
            width="39"
            height="119"
            viewBox="0 0 39 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="19.1971"
              y1="86.9169"
              x2="19.1971"
              y2="0"
              stroke={activePoint.includes("3") ? "#EDD3A4" : "#474747"}
              stroke-width="3.65659"
            />
            <circle
                className="ring-svg"
              cx="19.1971"
              cy="19.1971"
              r="15.3577"
              transform="matrix(1 0 0 -1 0 118.912)"
              stroke={activePoint.includes("3") ? "#EDD3A4" : "#474747"}
              stroke-width="7.67885"
            />
          </svg>
        </div>
        <p>
          <div className="p-title">
          <div className={`ring-svg ${!activePoint.includes("3") ? "active" : ""}`}>
            {data[2].heading}
            </div>
          </div>

          <div>
            {activePoint.includes("3") ? (<>{data[2].detail}</>):("")}
          </div>
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default ProgressBar;
