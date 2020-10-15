import React from 'react';
import { Card } from 'react-bootstrap';
import './FeedbackCard.css';


const FeedbackCard = ({image, name, designation, description}) => {
    return (
        <div className="feedback__card">
            <div className="feedback__info">
                <img className="customer__img" src={image} alt=""/>
                <div>
                    <h4 className="name"> {name} </h4>
                    <p className="designation"> {designation}</p>
                </div>
            </div>
                <p className="description">{description}</p>
        </div>
    );
};

export default FeedbackCard;