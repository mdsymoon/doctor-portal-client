import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import Header from './../Header/Header';
import Services from './../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;