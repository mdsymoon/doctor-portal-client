import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center justify-content-center">
            <div className="col-md-5 offset-md-1">
                <h1> Your New Smile <br/>Starts Here</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat, fugit consectetur quis iure maxime expedita ipsa laudantium recusandae alias.</p>
                <button className="header-button">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 mb-5">
                <img src={chair} alt="" className=" w-100" style={{maxWidth:"700px"}} />
            </div>
        </main>
    );
};

export default HeaderMain;