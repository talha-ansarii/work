import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import data from "../../utils/accordion.jsx";


const ProgressBar = () => {
  let [activePoint, setActivePoint] = useState("");
  const [activePointData, setActivePointData] = useState([]);


  function getAscendingNumbers(lastNumber) {
    const numbers = [];
    for (let i = 1; i <= lastNumber; i++) {
      const num = String(i);
      console.log(num);
      numbers.push(num);
    }
    return numbers;
  }

  const handleClick = (e, pointName) => {
    if (activePointData.includes(pointName)) {
      const arr = getAscendingNumbers(parseInt(pointName));
      setActivePointData(arr);
    } else {
      const newArray = [...activePointData, pointName];
      setActivePointData(newArray);
    }
    setActivePoint(pointName);
  };

  return (
    <div  className="p-wrapper">
      <div className={`p-container md:mb-0 ${activePoint === "1" ? " " : "  mb-[-49px] "} `} >
        <div
          className="ring-svg"
          name="point1"
          onClick={(e) => handleClick(e, "1")}
        >
          <svg
            width="39"
            height={activePoint === "1" ? "186" : "100"}
            viewBox={`0 0 39 ${activePoint === "1" ? "186" : "100"}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-700 ease-out  "
          >
            <line
              className="transition"
              x1="19.1971"
              y1="37.4801"
              x2="19.1971"
              y2={activePointData.includes("1") ? "180" : "100"}
              stroke={activePointData.includes("1") ? "#EDD3A4" : "#474747"}
              stroke-width="3.65659"
            />

            <circle
              className="ring-svg transition"
              cx="19.1971"
              cy="19.1971"
              r="15.3577"
              stroke={activePointData.includes("1") ? "#EDD3A4" : "#474747"}
              stroke-width="7.67885"
            />
          </svg>
        </div>

        <div>
          <div className="p-title">
            <div
              className={`transition ${
                activePoint === "1" ? " active " : " notActive "
              }`}
            >
              {data[0].heading}
            </div>
          </div>

          <div
            className={`transition ${
              activePoint === "1" ? " activeDetails " : " notActiveDetails "
            }`}
          >
            {data[0].detail}
          </div>
        </div>
      </div>

      <div className={`p-container md:mb-0 ${activePoint === "2" ? " " : "  mb-[-73px] "}`}>
        <div
          className="ring-svg"
          name="point2"
          onClick={(e) => handleClick(e, "2")}
        >
          <svg
            width="39"
            height={activePoint === "2" ? "186" : "100"}
            viewBox={`0 0 39 ${activePoint === "2" ? "186" : "100"}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-700 ease-out "

          >
            <line
              className="transition"
              x1="19.1971"
              y1="37.4801"
              x2="19.1971"
              y2="180.4"
              stroke={activePointData.includes("2") ? "#EDD3A4" : "#474747"}
              stroke-width="3.65659"
            />
            <circle
              className="ring-svg transition"
              cx="19.1971"
              cy="19.1971"
              r="15.3577"
              stroke={activePointData.includes("2") ? "#EDD3A4" : "#474747"}
              stroke-width="7.67885"
            />
          </svg>
        </div>
        <div>
          <div className="p-title">
            <div
              className={`transition ${
                activePoint === "2" ? "active" : "notActive"
              }`}
            >
              {data[1].heading}
            </div>
          </div>

          <div
            className={`transition ${
              activePoint === "2" ? " activeDetails " : " notActiveDetails "
            }`}
          >
            {data[1].detail}
          </div>
        </div>
        <div></div>
      </div>
      <div className="p-container">
        <div
          className="ring-svg"
          name="point3"
          onClick={(e) => handleClick(e, "3")}
        >
          <svg
            width="39"
            height="100"
            viewBox="0 0 39 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-300 ease-out "

          >
            <circle
              className="ring-svg transition"
              cx="19.1971"
              cy="19.1971"
              r="15.3577"
              stroke={activePointData.includes("3") ? "#EDD3A4" : "#474747"}
              stroke-width="7.67885"
            />
          </svg>
        </div>
        <p>
          <div className="p-title">
            <div
              className={`transition ${
                activePoint === "3" ? "active" : "notActive"
              }`}
            >
              {data[2].heading}
            </div>
          </div>

          <div
            className={`transition ${
              activePoint === "3" ? " activeDetails " : " notActiveDetails "
            }`}
          >
            {data[2].detail}
          </div>
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default ProgressBar;
