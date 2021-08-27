import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllAppointment = () => {
    const [appointments,setAppointment] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/appointments')
        .then(res => res.json())
        .then(data => setAppointment(data))
    },[appointments])
    return (
       <div className="row container-fluid containerStyle">
         <div className="col-md-3 pt-5">
          <Sidebar></Sidebar>
         </div>
         <div className="col-md-9 ">
      <h3 className="info-text py-5" style={{fontSize:'30px'}}>All Appointments Details</h3>
      <div className="table-responsive">
        <table style={{ minWidth: '1000px' }} className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Appointment Date</th>
              <th>Appointment Created</th>
            </tr>
          </thead>
          <tbody>
            {
              appointments.map((appointment, idx) =>
                <tr key={idx}>
                  <td>{appointment.username}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.created}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
       </div>
    );
};

export default AllAppointment;