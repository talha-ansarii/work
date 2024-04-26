import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameFilled, setNameFilled] = useState(true);
    const [emailFilled, setEmailFilled] = useState(true);
    const [messageFilled, setMessageFilled] = useState(true);
    const [emailValid, setEmailValid] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameFilled(!!e.target.value);
    };

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setEmailFilled(!!emailValue);

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
        setEmailValid(isValidEmail);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageFilled(!!e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nameFilled && emailFilled && messageFilled && emailValid) {

            const serviceId = 'service_dpgc0yk';
            const templateId = 'template_zmibxj6';
            const publicKey = 'o5yGdjwGtO41BP-rY';

            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: 'Shubh',
                message: message,
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then((response) => {
                    alert('Email sent successfully!', response);
                    setName('');
                    setEmail('');
                    setMessage('');
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });

        }
        else console.log("validate form");
    };

    return (
        <div className="contact-page">
            {/* Hero section with background image and overlay */}
            <div className="hero-section">
                <div className="hero-overlay">
                    <h1>Contact Us</h1>
                </div>
            </div>

            {/* Container for the contact form and social media columns */}
            <Container className="content-container">
                <Row className="contact-row">
                    {/* Contact form column */}
                    <Col md={6} className="contact-form-col">
                        <div className="modalheader">
                            <h3>Contact Us</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modaldata">
                                <div className='content'>
                                    <div><span style={{ color: 'red' }}>*</span> Name: </div>
                                    <div className='red-flex'>
                                        <input
                                            className='inputt'
                                            type="text"
                                            value={name}
                                            onChange={handleNameChange}
                                            style={{ border: nameFilled ? '' : '1px solid red', outline: 'none' }}
                                        />
                                        {!nameFilled && <p className="required">This field is required</p>}
                                    </div>
                                </div>
                                <div className='content'>
                                    <div><span style={{ color: 'red' }}>*</span> Email: </div>
                                    <div className='red-flex'>
                                        <input
                                            className='inputt'
                                            type='email'
                                            value={email}
                                            onChange={handleEmailChange}
                                            style={{ border: !emailValid || !emailFilled ? '1px solid red' : '', outline: 'none' }}
                                        />
                                        {!emailFilled && <p className="required">This field is required</p>}
                                        {emailFilled && !emailValid && <p className="required">Email is invalid</p>}
                                    </div>
                                </div>

                                <div className='content'>
                                    <div><span style={{ color: 'red' }}>*</span> Message: </div>
                                    <div className='red-flex'>
                                        <textarea
                                            className='inputt'
                                            rows="4"
                                            value={message}
                                            onChange={handleMessageChange}
                                            style={{ border: messageFilled ? '' : '1px solid red', outline: 'none' }}
                                        />
                                        {!messageFilled && <p className="required">This field is required</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="modalfooter">
                                <button type="submit" className='ok'>Submit</button>
                            </div>
                        </form>
                    </Col>

                    {/* Social media column */}
                    <Col md={6} className="social-media-col mt-3">
                        <h3>Connect with us on our social media</h3>
                        <div className="social-media-buttons">
                            {/* Social media buttons */}
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-media-button instagram-button"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-media-button facebook-button"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-media-button youtube-button"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-media-button twitter-button"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.whatsapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-media-button whatsapp-button"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactPage;
