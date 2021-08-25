import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({handleDateChange}) => {
    

  return (
    <main
      style={{ height: "600px" }}
      className="row d-flex align-items-center justify-content-center"
    >
      <div className="col-md-5 offset-md-1">
        <h1>Appointment</h1>
        <Calendar onChange={handleDateChange} value={new Date} />
      </div>
      <div className="col-md-6 mb-5">
        <img
          src={chair}
          alt=""
          className=" w-100"
          style={{ maxWidth: "700px" }}
        />
      </div>
    </main>
  );
};

export default AppointmentHeader;
