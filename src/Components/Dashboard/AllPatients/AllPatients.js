import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useState, useEffect } from 'react';

const AllPatients = () => {
    const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/appointments`)
      .then(res => res.json())
      .then(data => {
        setPatients(data);
      })
  }, [patients])
    return (
        <div className="row container-fluid containerStyle ">
            <div className="col-md-3 pt-5">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 ">
      <h3 className="info-text py-5" style={{fontSize:"30px"}}>All Patients Details</h3>
      <div className="table-responsive">
        <table style={{ minWidth: '1000px' }} className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Weight</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              patients.map((patient, idx) =>
                <tr key={idx}>
                  <td>{patient.username}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.weight} KG</td>
                  <td>{patient.phone}</td>
                  <td>{patient.email}</td>
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

export default AllPatients;