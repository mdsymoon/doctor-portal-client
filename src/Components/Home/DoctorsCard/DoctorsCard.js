import React from 'react';
import {AiOutlineMail} from "react-icons/ai";
import { useState, useEffect } from 'react';

const DoctorsCard = ({doctor}) => {
    
    return (
        <div className="col-md-4">
            <div className="card card-body " style={{border: 'none'}}>
                <img className="w-80" src={`http://localhost:4000/${doctor.img}`} alt=""/>
                <h5 className="text-center mt-2">{doctor.name}</h5>
                <p  className="text-center"><AiOutlineMail style={{ color:"17A2B8" , fontSize:'20px'}}/> {doctor.email}</p>
            </div>
        </div>
    );
};

export default DoctorsCard;