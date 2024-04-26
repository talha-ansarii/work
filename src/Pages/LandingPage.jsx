import React from "react";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Services/Residencies";
import Companies from "../components/Companies/Companies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";


function LandingPage() {
  return (
    <div>
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      {/* <Testimonials /> */}
    </div>
  );
}

export default LandingPage;
