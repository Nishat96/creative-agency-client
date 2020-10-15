import React from 'react';
import slack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import airbnb from '../../images/logos/airbnbT.png';
import './AllLogo.css';

const AllLogo = () => {
    return (
        <div className="row allLogo_div">
            <div className=''>
                <img className="all_logo" src={slack} alt=""/>
                <img className="all_logo" src={google} alt=""/>
                <img className="all_logo" src={uber} alt=""/>
                <img className="all_logo" src={netflix} alt=""/>
                <img className="all_logo" src={airbnb} alt=""/>
            </div>
            
        </div>
    );
};

export default AllLogo;