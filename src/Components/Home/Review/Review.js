import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="col-md-4 ">
      <div className="card card-body-style">
        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veniam
          cumque, cupiditate facilis in nesciunt sequi eos maxime modi fugit.
        </p>

        <div className="d-flex align-items-center justify-content-center">
          <img className="me-3" src={review.img} alt="" />

          <div>
            <h6 className="info-text">{review.name}</h6>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
