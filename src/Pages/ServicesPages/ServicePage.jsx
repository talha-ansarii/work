import React from "react";
import { Container } from "react-bootstrap";
import "../ServicesPages/ServicePage.css"
import catering_image from '../ServicesPages/catering.jpeg'
import corporate_image from '../ServicesPages/corporate.jpeg'
import decor_image from '../ServicesPages/decor.jpeg'
import styling_image from '../ServicesPages/styling.jpeg'
import dj_image from '../ServicesPages/dj.jpeg'
import photography_image from '../ServicesPages/photography.jpeg'
import hospitality_image from '../ServicesPages/hospitality.jpeg'

function ServicePage() {
  const services = [
    {
      image: <img src={photography_image} alt="Wedding Planner" />,
      title: "Wedding Planner", 
      text: "Our experienced wedding planners work closely with you to bring your dream wedding to life. You can rely on us for handling every detail with care and expertise.",
    },
    {
      image: <img src={catering_image} alt="Catering" />,
      title: "Catering",
      text: "We provide a variety of beautiful culinary delights to best suit your taste and event theme.",
    },
    {
      image: <img src={photography_image} alt="Photography/Videography" />,
      title: "Photography/Videography",
      text: "We realize the value of your priceless moments and so do our team of professional photographers and videographers. Our team vows to capture every moment of your event so you can have memories to cherish.",
    },
    {
      image: <img src={styling_image} alt="Styling and Grooming" />,
      title: "Styling and Grooming",
      text: "Our team of expert stylists and makeup artists make sure that you look your best at your event. From highlighting your features to a full on bridal look we do it all!",
    },
    {
      image: <img src={decor_image} alt="Decoration" />,
      title: "Decoration",
      text: "We offer a wide range of decoration options to transform your venue as per your style and theme.",
    },
    {
      image: <img src={dj_image} alt="DJ and Entertainment" />,
      title: "DJ and Entertainment",
      text: "Our entertainment team keeps the energy high at your event! We keep the party going with music, performances, and interactive experiences tailored as per your taste!",
    },
    {
      image: <img src={hospitality_image} alt="Hospitality and Guest Support" />,
      title: "Hospitality and Guest Support",
      text: "We ensure that your guests feel welcomed and comfortable throughout the event. We are with you every step of the way providing support and assistance.",
    },
    {
      image: <img src={corporate_image} alt="Corporate Events" />,
      title: "Corporate Events",
      text: "We offer tailored event planning and management services to ensure that your corporate event is professional, engaging, and successful!",
    },
  ];

  return (
    <Container>
      <div className="ServicePage">
        <h1 className="page-title">Our Services</h1>
        <div className="services-container">
          {services.map((service, index) => (
            <div
              className={`service-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
            >
              <div className={`service-image image-service${index + 1}`}>
                {service.image}
              </div>
              <div className="service-text">
                <h3 className="service-title">{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
          {/* Display "and many more" button at the end */}
          <div className="list">
            <h3>And list goes on!</h3>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ServicePage;
