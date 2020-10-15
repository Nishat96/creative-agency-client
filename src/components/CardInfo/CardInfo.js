import React from 'react';
import './CardInfo.css';
import { Card } from 'react-bootstrap';
const CardInfo = ({image, title, description}) => {
    return (
        <div className="card__section">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="all_icon" variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="title">{title}</Card.Title>
                    <Card.Text className="description">
                    {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardInfo;