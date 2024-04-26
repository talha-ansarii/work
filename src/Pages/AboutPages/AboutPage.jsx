import React, { useState, useEffect } from 'react';
import './AboutPage.css';
// import corporate_image from "../AboutPages/corporate.jpeg"
import corporate_image from "../AboutPages/corporate.jpeg"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import FontAwesome icons

function AboutUs() {
    // State for the current testimonial index
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
    // List of testimonials with images
    const testimonials = [
        {
           
            name: 'John Doe',
            text: 'This organization has changed my life for the better. Highly recommend their services!',
            role: 'Client',
        },
        {
            name: 'Jane Smith',
            text: 'A great experience working with this team. Their professionalism is unmatched.',
            role: 'Partner',
        },
        {
            name: 'Michael Johnson',
            text: 'A fantastic organization with top-notch services. They exceeded my expectations.',
            role: 'Customer',
        },
        {
            name: 'Emily Davis',
            text: 'The best decision I made was to work with this organization. They truly care about their clients.',
            role: 'Customer',
        },
        {
            name: 'William Brown',
            text: 'Professional, reliable, and friendly. I would recommend them to anyone.',
            role: 'Client',
        },
        {
            name: 'Samantha Wilson',
            text: 'Their dedication and expertise are second to none. I couldn’t be happier with their services.',
            role: 'Client',
        },
    ];

    // Function to go to the next testimonial
    const nextTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    // Function to go to the previous testimonial
    const prevTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Automatically slide to the next testimonial every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000); // Adjust the interval time as needed

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-us">
            <section className="about-section">
                <h1>About Us</h1>
            </section>

            <section className="our-story">
                <div className="container">
                    <div className="our-story-content">
                        <div className="our-story-text">
                            <h2>Our Story</h2>
                            <p>
                                Our journey began with a vision to make a positive impact in the community. With dedication and hard work, we have grown into an organization that values innovation, integrity, and excellence. We are proud of our story and how it has shaped our mission and values.
                            </p>
                        </div>
                        <img src={corporate_image} alt="Our Story" className="our-story-image" />
                    </div>
                </div>
            </section>

            <section className="our-mission">
                <div className="container">
                    <div className="our-mission-content">
                        <img src={corporate_image} alt="Our Mission" className="our-mission-image" />
                        <div className="our-mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                Our mission is to provide top-quality services that exceed our clients' expectations. We believe in building lasting relationships with our clients based on trust, respect, and transparency. Our dedicated team works hard to deliver innovative solutions that drive success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>Testimonials</h2>
                <div className="testimonials-container">
                    <div className="testimonials-slider">
                        <div className="testimonial">
                            <p>"{testimonials[currentTestimonial].text}"</p>
                            <h3>- {testimonials[currentTestimonial].name}</h3>
                            <p>{testimonials[currentTestimonial].role}</p>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;