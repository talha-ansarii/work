import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../ServicesPages/ServicePage.css";
import catering_image from "../ServicesPages/catering.jpeg";
import corporate_image from "../ServicesPages/corporate.jpeg";
import decor_image from "../ServicesPages/decor.jpeg";
import styling_image from "../ServicesPages/styling.jpeg";
import dj_image from "../ServicesPages/dj.jpeg";
import photography_image from "../ServicesPages/photography.jpeg";
import hospitality_image from "../ServicesPages/hospitality.jpeg";
import { useLocation } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

function ServicePage() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/scrollreveal@4";
    script.async = true;

    document.body.appendChild(script);
    ScrollReveal().reveal(".card", { delay: 300 });
    ScrollReveal({ reset: true });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const services = [
    {
      id: 1,
      image: photography_image,
      title: "Wedding Planner",
      text: "Our experienced wedding planners work closely with you to bring your dream wedding to life. You can rely on us for handling every detail with care and expertise.",
    },
    {
      id: 2,
      image: catering_image,
      title: "Catering",
      text: "We provide a variety of beautiful culinary delights to best suit your taste and event theme.",
    },
    {
      id: 3,
      image: photography_image,
      title: "Photography/Videography",
      text: "We realize the value of your priceless moments and so do our team of professional photographers and videographers. Our team vows to capture every moment of your event so you can have memories to cherish.",
    },
    {
      id: 4,
      image: decor_image,
      title: "Decoration",
      text: "We offer a wide range of decoration options to transform your venue as per your style and theme.",
    },
    {
      id: 5,
      image: dj_image,
      title: "DJ and Entertainment",
      text: "Our entertainment team keeps the energy high at your event! We keep the party going with music, performances, and interactive experiences tailored as per your taste!",
    },
    {
      id: 6,
      image: hospitality_image,
      title: "Hospitality and Guest Support",
      text: "We ensure that your guests feel welcomed and comfortable throughout the event. We are with you every step of the way providing support and assistance.",
    },
    {
      id: 7,
      image: corporate_image,
      title: "Corporate Events",
      text: "We offer tailored event planning and management services to ensure that your corporate event is professional, engaging, and successful!",
    },
    {
      image: styling_image,
      title: "Styling and Grooming",
      text: "Our team of expert stylists and makeup artists make sure that you look your best at your event. From highlighting your features to a full on bridal look we do it all!",
    },
  ];
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full  ">
      <div className="mb-10">
        <img
          src="/banner.avif"
          className="z-[10] relative top-[0px] blur-sm right-0 w-full h-[360px] object-cover"
        />
        <h1 className=" font-bold absolute text-white top-[280px] text-6xl font-[Manrope] left-10 z-[100]">Services</h1>
      </div>

      
    <div className="">

      {services.map((service) => {
        return <div id={service.id} className={`card`}>
        <ServiceCard service={service} key={service.id} number={service.id} />
        </div>
      } )}
      

    </div>


      
      
    </div>
  );
}

export default ServicePage;
