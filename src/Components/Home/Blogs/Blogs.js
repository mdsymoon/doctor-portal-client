import React from "react";

const blogs = [
  {
    img:"",
    name: "Rashed kabir",
    date: "23 Aug 2020",
    info: "Check at least a doctor in a year for your teeth",
  },
  {
    img:"",
    name: "Dr. Caudi",
    date: "09 Feb 2021",
    info: "2 times of brush in a day can keep you healthy",
  },
  {
    img:"",
    name: "Dr. John Mitchel",
    date: "10 Jan 2020",
    info: "The tooth cancer is taking a challenge",
  }
];

const Blogs = () => {
  return (
    <div>
      <div className="text-center mt-5 pt-5">
        <h3 className="info-text">Our Blogs</h3>
        <h1>From Our Blog News</h1>
      </div>
      <div>
          {blogs.map(blog => )}
      </div>
    </div>
  );
};

export default Blogs;
