import React, { useState } from "react";

import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookAppointmentCard.css";

const BookAppointmentCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-lg-4 ">
      <div className="container-fluid">
        <div className="card card-body text-center mb-4">
          <h6 className="info-text">{booking.subject}</h6>
          <p>{booking.visitingHour}</p>
          <small className="mb-2">{booking.totalSpace} SPACE AVAILABLE</small>
          <button onClick={openModal} className="info-button">
            BOOK APPOINTMENT
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            appointmentOn={booking.subject}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentCard;
