import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("https://hidden-harbor-95982.herokuapp.com/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  return (
    <div className="row containerStyle container-fluid">
      <div className="col-md-3 py-5">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7 py-5 ">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Doctor's Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              class="form-control my-2"
              id="exampleInputEmail1"
              name="name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Doctor's Email</label>
            <input
              onBlur={handleBlur}
              type="text"
              class="form-control my-2"
              id="exampleInputPassword1"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="uploadImage">Doctor's Image</label>
            <input
              onChange={handleFileChange}
              type="file"
              class="form-control my-2"
              id="uploadImage"
              placeholder="Password"
              name="file"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
