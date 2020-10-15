import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import './Home.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import AllLogo from '../AllLogo/AllLogo';
import Services from '../Services/Services';
import CarouselFourth from '../CarouselFourth/CarouselFourth';
import FeedbackSection from '../FeedbackSection/FeedbackSection';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
   
    return (
        <div>
            <div className="header">
                <Navbar className="main-header" bg="light" variant="light">
                    <Navbar.Brand href="#home">
                    <img className="logo_agency" src={logo} alt=""/> 
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="header-nav" href="#home">Home</Nav.Link>
                        <Nav.Link className="header-nav" href="#portfolio">Our Portfolio</Nav.Link>
                        <Nav.Link className="header-nav" href="#team">Our Team</Nav.Link>
                        <Nav.Link className="header-nav" href="#contact">Contact Us</Nav.Link>
                        <Nav.Link className="header-nav login" href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar> 
                <HeaderMain></HeaderMain>
            </div>
        <AllLogo></AllLogo> 
        <Services></Services>
        <CarouselFourth></CarouselFourth>
        <FeedbackSection></FeedbackSection>
        <ContactUs></ContactUs>
    </div>
    );
};

export default Home;