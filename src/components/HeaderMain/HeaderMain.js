import React from 'react';
import headerRight from '../../images/logos/FrameT.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className="row header-first">
            <div className="col-md-4 offset-md-1">
                <h1 style={{'font-weight': '700'}}>Let's Grow Your <br/> Brand to The <br/> Next Level</h1>
                <p style={{'font-weight': '600'}}>Lorem ipsum dolor sit consectetur adipisicing elit. Laboriosam, ipsam optio. A, hic iusto molestiae adipisci labore, facilis quasi mollitia, odio molestias quia voluptate architecto ea quae sunt dicta vitae. </p>
                    <button className='login'> Hire Us </button>
            </div> 
            <div className="col-md-6">
                <img className="header-right-img img-fluid" src={headerRight} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;