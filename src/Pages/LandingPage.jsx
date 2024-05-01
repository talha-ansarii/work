import React from "react";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Services/Residencies";
import Companies from "../components/Companies/Companies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Numbers from "../components/Numbers/Numbers";
import Carousel from "../components/Carousel/Carousel"
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Numbers />
      {/* <Companies /> */}
      <Residencies />
      <Value />
      {/* <Contact /> */}
      <Gallery />
      <Testimonials />
      <GetStarted />
    </div>
  );
}

export default LandingPage;
