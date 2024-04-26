import React from 'react'
import CountUp from "react-countup";
import "./Numbers.css"
const Numbers = () => {
  return (
    <section className='numbers-wrapper flexCenter'>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1450} end={1500} duration={4} /> <span>+</span>
              </span>
              <span className="belowText">Events Organised</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={2150} end={2200} duration={4} /> <span>+</span>
              </span>
              <span className="belowText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={18} /> <span>+</span>
              </span>
              <span className="belowText">Services We Offer</span>
            </div>
          </div>
    </section>
  )
}

export default Numbers