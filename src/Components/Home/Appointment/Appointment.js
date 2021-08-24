import React from 'react';
import './Appointment.css';
import appointment  from '../../../images/appoinement.png';

const Appointment = () => {
    return (
        <div className='appointment '>
            <div className='container'>
            <div className="row" >
                <div className="col-md-5 hidden">
                    <img className=" appointment-image" src={appointment} alt=""/>
                </div>
                <div className="col-md-7 ">
                    <p className="info-text">Appointment</p>
                    <h1 className="appointment-title">Make An Appointment <br/> Today </h1>
                    <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ea error dignissimos voluptate magni beatae ipsum nobis cumque quod enim.</p>
                    <button className="info-button mt-3">Learn More</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;