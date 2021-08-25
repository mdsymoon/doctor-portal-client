import React from 'react';
import './Doctors.css';
import dr1 from '../../../images/doctor1.jpg';
import dr2 from '../../../images/doctor2.jpg';
import dr3 from '../../../images/doctor 3.jpg';
import DoctorsCard from './../DoctorsCard/DoctorsCard';

const doctors =[
    {
        img: dr1,
        name:"Dr. Stephen",
        phone: "+61 434 432 234"
    },
    {
        img: dr2,
        name: "Dr. Jordan",
        phone: "+61 434 432 234"
    },
    {
        img: dr3,
        name: "Dr. Melinda",
        phone: "+61 434 432 234"
    }
]

const Doctors = () => {

    return (
        <div>
            <h3 className="info-text text-center">Our Doctors</h3>
            <div className="row m-2">
                {
                    doctors.map(doctor => <DoctorsCard doctor={doctor}></DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default Doctors;