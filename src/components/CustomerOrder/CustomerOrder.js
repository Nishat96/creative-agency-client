import React from 'react';
import './CustomerOrder.css';
import logo from '../../images/logos/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import {FiShoppingCart} from 'react-icons/fi'; 
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from 'react-router-dom';

const CustomerOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="customer_order">
            <div className="header__order">
              <Link to ="/home"> <img style={{marginRight: '80px', marginLeft: '20px'}} className="logo_order" src={logo} alt=""/> </Link> 
                <p className="order"> Order</p> 
                <p className="loggedInUser_name">{loggedInUser.name}</p> 
            </div>
            <section className="form__order">
            <aside className="order__icon">
                <p> <FiShoppingCart/> Order</p>
                <p> <ListAltIcon/> Service List</p>
                <p> <SmsOutlinedIcon/> Review</p>
            </aside>
            <section className="form__section"> 
            <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Name/ Your Company Name"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address "/>
                       </div>
                       <div className="form-text">
                           <textarea name="" className="form-control" placeholder=""></textarea>
                       </div>
                       <div className="form-text">
                           <textarea name="" className="form-control" placeholder="Project Details"></textarea>
                       </div>
                       <div className="upload__file">
                            <div className="form-group">
                                <input type="text" className="price" placeholder="Price"/>
                            </div>
                            <div className="form-group">
                                <input type="file" className="upload-file" placeholder="Upload Project File"/>
                            </div>
                       </div>
                       <div className="form-group">
                           <button type="button" className="send"> Send </button>
                       </div>
                   </form>
             </section>   
             </section>
        </div>
    );
};

export default CustomerOrder;