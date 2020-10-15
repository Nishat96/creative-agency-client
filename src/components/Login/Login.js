import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import {FcGoogle} from 'react-icons/fc'; 
import logo from '../../images/logos/logo.png';
import './Login.css';
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {

            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);

           }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
           
          });
    }
    return (
        <div className="login__main">
            <div className="login__logo">
                <img className="logo_agency" src={logo} alt=""/>
            </div>
            <div className="main-div">
                <h2> Login With</h2>
                <div className="google__div">
                    <Button onClick={handleGoogleSignIn} className="google__btn"> <FcGoogle className="google__logo"/> Continue with Google</Button>
                </div>
                <p className="create__account">Don't have an account? <Link>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;