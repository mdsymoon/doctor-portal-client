import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer my-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 text-center mt-3">
            <h5 className="text-white">.</h5>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extraction</p>
            <p>Check Up</p>
          </div>
          <div className="col-md-3 text-center">
            <h5 className="info-text">Services</h5>
            <p>Tooth Extraction</p>
            <p>Treatment of Personal Diseases</p>
            <p>Check Up</p>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Emergency Dental Care</p>
          </div>
          <div className="col-md-3 text-center">
            <h5 className="info-text">Oral Health</h5>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extraction</p>
            <p>Emergency Dental Care</p>
            <p>Check Up</p>
            <p>Emergency Dental Care</p>
          </div>
          <div className="col-md-3 text-center">
            <h5 className="info-text">Our Address</h5>
            <p>New York - 101010 Hudson</p>
            <p>Yards</p>
            <div className="mb-5">
              <FaFacebook style={{fontSize:'40px', marginRight: '10px'}} className="info-text"/>
              <AiFillGooglePlusCircle  style={{ fontSize: '45px', marginRight: '10px' }} className="info-text"/>
              <AiFillTwitterCircle style={{ fontSize: '45px', marginRight: '10px' }} className="info-text"/>
            </div>
            <p>Call Now</p>
            <button className="info-button">+2025550295</button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Footer;