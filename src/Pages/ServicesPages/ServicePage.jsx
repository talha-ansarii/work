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
    ScrollReveal().reveal(".service-item", { delay: 300 });
    ScrollReveal({ reset: true });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const services = [
    {
      id: 1,
      image: <img src={photography_image} alt="Wedding Planner" />,
      title: "Wedding Planner",
      text: "Our experienced wedding planners work closely with you to bring your dream wedding to life. You can rely on us for handling every detail with care and expertise.",
    },
    {
      id: 2,
      image: <img src={catering_image} alt="Catering" />,
      title: "Catering",
      text: "We provide a variety of beautiful culinary delights to best suit your taste and event theme.",
    },
    {
      id: 3,
      image: <img src={photography_image} alt="Photography/Videography" />,
      title: "Photography/Videography",
      text: "We realize the value of your priceless moments and so do our team of professional photographers and videographers. Our team vows to capture every moment of your event so you can have memories to cherish.",
    },
    {
      id: 4,
      image: <img src={decor_image} alt="Decoration" />,
      title: "Decoration",
      text: "We offer a wide range of decoration options to transform your venue as per your style and theme.",
    },
    {
      id: 5,
      image: <img src={dj_image} alt="DJ and Entertainment" />,
      title: "DJ and Entertainment",
      text: "Our entertainment team keeps the energy high at your event! We keep the party going with music, performances, and interactive experiences tailored as per your taste!",
    },
    {
      id: 6,
      image: (
        <img src={hospitality_image} alt="Hospitality and Guest Support" />
      ),
      title: "Hospitality and Guest Support",
      text: "We ensure that your guests feel welcomed and comfortable throughout the event. We are with you every step of the way providing support and assistance.",
    },
    {
      id: 7,
      image: <img src={corporate_image} alt="Corporate Events" />,
      title: "Corporate Events",
      text: "We offer tailored event planning and management services to ensure that your corporate event is professional, engaging, and successful!",
    },
    {
      image: <img src={styling_image} alt="Styling and Grooming" />,
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
    <div className="w-full h-[200vh] relative ">
      <div className="">
        <img
          src="/banner.avif"
          className="z-[10] absolute   top-[70px] blur-sm right-0 w-full h-[300px] object-cover"
        />
        <h1 className=" absolute font-bold text-white top-[280px] text-6xl font-[Manrope] left-10 z-[1000]">Services</h1>
      </div>

      
    <div className="top-[400px] absolute">
      
      <ServiceCard/>
      <ServiceCard/>
    </div>

      
      
    </div>
  );
}

export default ServicePage;
