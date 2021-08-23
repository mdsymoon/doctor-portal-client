import React from "react";
import fluoride from "../../../images/floride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from './../ServiceDetail/ServiceDetail';

const serviceData = [
  {
    name: "Floride Treatment",
    img: fluoride ,
  },
  {
    name: "Cavity Filling",
    img:  cavity ,
  },
  {
    name: "Teeth Whitening",
    img:  whitening 
  }
];

const Services = () => {
  return (
    <section className="services-container">
      <div className="text-center">
        <h5 className="mt-5" style={{ color: "#02dbd0" , fontSize: '25px' }}>Our Services</h5>
        <h2 className="mb-5 mt-5">Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5">
            {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
        </div>
      </div>
    </section>
  );
};

export default Services;
