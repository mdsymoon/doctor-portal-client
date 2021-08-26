import React from 'react';
import loginpageimg from '../../../images/Group 140.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    const googleLogIn = () => {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }

    return (
       
             <div className="container">
      <div className="row align-items-center container-fluid">
        <div className="col-lg-5 my-5">
          <div className="card card-body">
            <h3 className="text-center m-5" style={{ color: "#0992B2" }}>
              Log In
            </h3>
            <input
              type="email"
              className="form-control my-3"
              placeholder="Your Email"
            />
            <input
              type="password"
              className="form-control mb-5"
              placeholder="Your Password"
            />
            <button type="submit" className="info-button" onClick={googleLogIn} >
              Google LogIn
            </button>
          </div>
        </div>
        <div className="col-lg-7">
          <img src={loginpageimg} alt="Login" className="w-100"></img>
        </div>
      </div>
    </div>
        
    );
};

export default Login;