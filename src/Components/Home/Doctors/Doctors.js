import React from "react";
import "./Doctors.css";
import DoctorsCard from "./../DoctorsCard/DoctorsCard";
import { useState, useEffect } from "react";

// const doctors =[
//     {
//         img: dr1,
//         name:"Dr. Stephen",
//         phone: "+61 434 432 234"
//     },
//     {
//         img: dr2,
//         name: "Dr. Jordan",
//         phone: "+61 434 432 234"
//     },
//     {
//         img: dr3,
//         name: "Dr. Melinda",
//         phone: "+61 434 432 234"
//     }
// ]

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://hidden-harbor-95982.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);
  return (
    <div>
      <h3 className="info-text text-center mb-5" style={{ fontSize: "30px" }}>
        Our Doctors
      </h3>
      <div className="row m-2 d-flex justify-content-center">
        {doctors.map((doctor) => (
          <DoctorsCard doctor={doctor}></DoctorsCard>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
