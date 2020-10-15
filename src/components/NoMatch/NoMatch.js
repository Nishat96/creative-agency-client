import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="no-match">
        <div>
            <h1 className="error"> 404 <span className="not__found"> Not Found!</span>  </h1>
            <div className="block">
            </div>
            <p  className="error-p"> Sorry! The page you are looking for could not be found <span>😫</span>  </p>
         </div>
    </div>
    );
};

export default NoMatch;