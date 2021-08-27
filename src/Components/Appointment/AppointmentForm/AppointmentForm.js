import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
  },
};

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date.toDateString();
    data.created = new Date().toDateString();

    fetch(`http://localhost:4000/addAppointment`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        closeModal();
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h4 className="text-info text-center pt-4">{appointmentOn}</h4>
        <p className="text-center text-secondary">
          <small>On {date.toDateString()}</small>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <input
              className="form-control"
              placeholder="Your Name"
              {...register("username", { required: true })}
            />
            {errors.username && <p>This field is required</p>}
          </div>

          <div className="form-group mb-3">
            <input
              className="form-control"
              placeholder="Your Phone Number"
              {...register("phone", { required: true })}
            />{" "}
            {errors.phone && <p>This field is required</p>}
          </div>

          <div className="form-group mb-3">
            <input
              className="form-control"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />{" "}
            {errors.email && <p>This field is required</p>}
          </div>

          <div className="form-group mb-3">
            <select
              className="form-control"
              aria-label="Default select example"
              {...register("gender", { required: true })}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p>This field is required</p>}
          </div>

          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Your Age"
              {...register("age", { required: true })}
            />
            {errors.age && <p>This field is required</p>}
          </div>

          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Your Weight"
              {...register("weight", { required: true })}
            />
            {errors.weight && <p>This field is required</p>}
          </div>

          <input className="btn btn-info" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
