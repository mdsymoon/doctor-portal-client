import React from 'react';
import dentalCare from '../../../images/dentalcare.png'
import './DentalCare.css';

const DentalCare = () => {
    return (
        <section className="w-75 mx-auto my-5">
            <div className="row align-items-center  ">
                <div className="col-lg-5">
                    <img className=" w-100 "  src={dentalCare} alt=""/>
                </div>
                <div className="col-lg-7">
                    <h1>Exceptional Dental <br/> Care, On Your Terms</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sapiente! Illum consectetur, quas blanditiis laudantium eius unde nesciunt, ducimus voluptate nemo fugit eaque laboriosam atque, a facilis voluptatem incidunt? Quas.</p>
                    <button className="dentalCare-button">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;