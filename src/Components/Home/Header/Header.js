import React from 'react';
import HeaderMain from '../HaederMain/HeaderMain';
import Navbar from '../NavbarPage/NavbarPage';
import './Header.css'
import BusinessInfo from './../BusinessInfo/BusinessInfo';
const Header = () => {
    return (
        <div class="header-container ">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
            
        </div>
    );
};

export default Header;