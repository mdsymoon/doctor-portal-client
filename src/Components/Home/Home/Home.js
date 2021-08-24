import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import Header from './../Header/Header';
import Services from './../Services/Services';
import Appointment from './../Appointment/Appointment';
import Testimonial from './../Testimonial/Testimonial';
import Blogs from './../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;