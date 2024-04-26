import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
// import "./"

const Hero = () => {
  return (
    <section className="hero-wrapper">
    <img className="hero-img" src="/hero.jpeg" />
    <div className="overlay"></div>
      <div className="paddings innerWidth hero-container">

        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title ">
            <motion.h1 
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 2, 
                type: "ease-in", 
                y: { type: "spring", stiffness: 100, yoyo: 1 }
              }}
            >
              Your Vision, <br />
              Our Expertise,
              <br /> Events that Dazzle.
            </motion.h1>
          </div>
          <div className="flexColStart  secondaryText flexhero-des">
            <span>Discover the perfect event for any occasion. We make planning effortless.</span>
            <span>From weddings to corporate events, we handle every detail. You celebrate without worry.</span>
          </div>

          {/* <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div> */}

          {/* <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1450} end={1500} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Events Organised</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={2150} end={2200} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={18} /> <span>+</span>
              </span>
              <span className="secondaryText">Services We Offer</span>
            </div>
          </div> */}
        </div>

        {/* right side */}
        {/* <div className="flexCenter hero-right">
          <motion.div 
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 2, 
              type: "ease-in", 
              y: -50 
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
