import React from 'react';

const AppointmentByDate = ({appointment}) => {
    return (
        <div>
      <h1 style={{fontSize:'40px'}}  className="info-text  pb-4">Appointments : {appointment.length}</h1>
      <div className="table-responsive">
        <table style={{width: '600px'}} className="table">
          <thead>
            <tr>
              <th>Patient's Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {
              appointment.map((appointments) =>
                <tr key={appointments._id}>
                  <td>{appointments.username}</td>
                  <td>{appointments.phone}</td>
                  <td>{appointments.email}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AppointmentByDate;