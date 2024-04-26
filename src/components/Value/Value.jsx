import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
  MdOutlineArrowDropUp,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            At Craft My Event, we make excellence our standard.
            <br />
            From creative concepts to flawless execution, we ensure your event leaves a lasting impression.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={true}
          preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [expanded, setExpanded] = useState(false);

              const toggleAccordion = () => {
                setExpanded(prevExpanded => !prevExpanded);
              };

              const collapseAccordion = () => {
                setExpanded(false);
              };

              return (
                <AccordionItem className={`accordionItem ${expanded ? "expanded" : "collapsed"}`} uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton" onClick={toggleAccordion}>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        {expanded ? <MdOutlineArrowDropUp size={20} /> : <MdOutlineArrowDropDown size={20} />}
                      </div>
                    </AccordionItemButton>
                    {expanded && (
                      <button className="collapseButton" onClick={collapseAccordion}>
                        Collapse
                      </button>
                    )}
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>

        </div>
      </div>
    </section>
  );
};

export default Value;
