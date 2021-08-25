import React from 'react';
import './BookAppointmentCard.css';

const BookAppointmentCard = ({booking}) => {
    return (
        
            <div className='col-lg-4 '>
                <div className="container-fluid">
            <div className='card card-body text-center mb-4'>
                <h6 className="info-text">{booking.subject}</h6>
                <p>{booking.visitingHour}</p>
                <small className="mb-2">{booking.totalSpace} SPACE AVAILABLE</small>
                <button className="info-button">BOOK APPOINTMENT</button>
            </div>
        </div>
        </div>
    );
};

export default BookAppointmentCard;