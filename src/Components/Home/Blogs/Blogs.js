import React from "react";
import './Blogs.css';
import BlogInfo from "../BlogInfo/BlogInfo";
import drCaudi from "../../../images/Ellipse 1.png";
import drJohn from "../../../images/Ellipse 3.png";
import {BsArrowRight} from "react-icons/bs";


const blogs = [
  
  {
    img: drCaudi,
    name: "Dr. Caudi",
    date: "09 Feb 2021",
    info: "2 times of brush in a day can keep you healthy",
    description:
      "It is a long established fact that by the readable content of a lot layout. The poing",
  },
  {
    img: drJohn,
    name: "Dr. John Mitchel",
    date: "10 Jan 2020",
    info: "The tooth cancer is taking a challenge",
    description:
      "It is a long established fact that by the readable content of a lot layout. The poing",
  },
];

const Blogs = () => {
  return (
    <section style={{overflow: 'hidden', margin: '20px'}}>
      <div className="text-center mt-5">
        <h3 className="info-text">Our Blogs</h3>
        <h1>From Our Blog News</h1>
      </div>
      <div className="row my-5">
        <div className="col-lg-4 mb-3">
          <div className="card card-body" style={{height: '100%',backgroundColor:"#17A2B8"}} >
            <div className="d-flex flex-colum" style={{height: '100%' , justifyContent: "space-between" }}>
              <div >
                <p className=" text-white mb-0">Rashed Kabir</p>
                <small className=" text-white mb-5 d-block">22 Aug 2018</small>
                <p className="text-white">
                  Check at least a doctor in a year for your teeth
                </p>
              
              <BsArrowRight className="arrow-icon" />
            </div>
            </div>
          </div>
        </div>
        {
          blogs.map(blog=> <BlogInfo blog={blog}></BlogInfo>)
        }
      </div>
    </section>
  );
};

export default Blogs;
