import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-3.png';
import './CarouselFourth.css';

const CarouselFourth = () => {
    return (
      <div className="fourth-section">
          <h3>Here are some of <span className="services">ours works</span></h3>
          <img className="carousel-img" src={carousel1} alt=""/>
          <img className="carousel-img" src={carousel2} alt=""/>
          <img className="carousel-img" src={carousel3} alt=""/>
     </div>
    );
};

export default CarouselFourth;