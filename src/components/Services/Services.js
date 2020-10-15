import React from 'react';
import './Services.css';
import service1 from '../../images/icons/service1.png';
import service2 from '../../images/icons/service2.png';
import service3 from '../../images/icons/service3.png';
import CardInfo from '../CardInfo/CardInfo';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section>
            <div className="services__section">
                <h3 className="service">Provide awesome <span className="services">services</span></h3>
            </div>
            <div className="service__section">
                <Link className="cardInfo__link" to="/order">
                    <CardInfo
                        image={service2}
                        title="Web and Mobile Design"
                        description="We craft stunning and amazing web UI, using a well drafted UX to fit your product."
                    />
               </Link>
               <Link className="cardInfo__link" to="/order">
                    <CardInfo
                        image={service1}
                        title="Graphic design"
                        description="Amazing flyers, social media posts and brand representations that would make your brand stand out."
                    />
                </Link>
                <Link className="cardInfo__link" to="/order">
                    <CardInfo
                        image={service3}
                        title="Web development"
                        description="With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
                    />
                </Link>
            </div>
       
        </section>
    );
};

export default Services;