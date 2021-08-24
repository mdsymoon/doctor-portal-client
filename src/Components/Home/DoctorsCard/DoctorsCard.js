import React from 'react';
import {FaPhoneAlt} from "react-icons/fa";

const DoctorsCard = ({doctor}) => {
    return (
        <div className="col-md-4">
            <div className="card card-body " style={{border: 'none'}}>
                <img className="w-80" src={doctor.img} alt=""/>
                <h5 className="text-center mt-2">{doctor.name}</h5>
                <p  className="text-center"><FaPhoneAlt style={{ color:"17A2B8"}}/> {doctor.phone}</p>
            </div>
        </div>
    );
};

export default DoctorsCard;