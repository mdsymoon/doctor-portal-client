import React from 'react';


const BlogInfo = ({blog}) => {
    return (
        <div className="col-lg-4  mb-3">
            <div className="card card-body">
                <div className="d-flex pb-4 align-items-center">
                    <img src={blog.img}  alt="" style={{width: '70px', height: '60px'}}  />
                    <div className="mx-4">
                        <h3>{blog.name}</h3>
                        <p>{blog.date}</p>
                    </div>
                </div>
                <p>{blog.info}</p>
                <p>{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogInfo;