import React from 'react';
import './Testimonial.css'
import review1 from "../../../images/Ellipse 1.png"
import review2 from "../../../images/Ellipse 2.png"
import review3 from "../../../images/Ellipse 3.png"
import Review from '../Review/Review';

const reviews =[
    {
        name: 'Winson Herry',
        location: 'California',
        img: review1
      },
      {
        name: 'Henry Tie',
        location: 'Buffalo',
        img: review2
      },
      {
        name: 'Martin Alex',
        location: 'Maxico',
        img: review3
      }
]

const Testimonial = () => {
    return (
        <div style={{overflow:"hidden"}}>
            <div style={{margin: '20px'}}>
                <h5 className="text-info ">TESTIMONIAL</h5>
                <h1 className="display-2">What's Our Patients <br/> Say?</h1>
            </div>
            <div className="row">
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;