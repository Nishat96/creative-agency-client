import React from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';
import './FeedbackSection.css';

const FeedbackSection = () => {
    return (
        <div>
            <h3 className="clients"> Clients <span className="services">Feedback</span> </h3>
           
            <div className="feedback__section">
            <FeedbackCard
                image={customer1}
                name="Nash patrick"
                designation="CEO, Manpol"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
            />
           
            <FeedbackCard
                image={customer2}
                name="Miriam Barron"
                designation="CEO, Manpol"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
            />
           
            <FeedbackCard
                image={customer3}
                name="Bria Mailone"
                designation="CEO, Manpol"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
            />
           
            </div>
        </div>
    );
};

export default FeedbackSection;