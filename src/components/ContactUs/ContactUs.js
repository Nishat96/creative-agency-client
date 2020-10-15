import React from 'react';
import Footer from '../Footer/Footer';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contactUs__main">
            <div className="contactUs__section">
            <div className="contactUs__left">
                <h3>Let us handle your <br/> project, professionally.</h3>
                <h5>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</h5>
            </div>
            <div className="container">
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Name/ Your Company Name"/>
                       </div>
                       <div className="form-text">
                           <textarea name="" className="form-control" placeholder="Your Message"></textarea>
                       </div>
                       
                       <div className="form-group">
                           <button type="button" className="send"> Send </button>
                       </div>
                   </form>
               </div>
           </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default ContactUs;