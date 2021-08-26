import React from 'react';
import loginpageimg from '../../../images/Group 140.png';


const Login = () => {
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
            <button type="submit" className="info-button" >
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