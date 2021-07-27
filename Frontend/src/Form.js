import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import image from "./assests/undraw_Sign_in_re_o58h.png";
function Form() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    //Handle change for all form elements together.
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Username: ${formdata.username} Email: ${formdata.email} Password: ${formdata.password}`
    );
    axios
      .post("http://127.0.0.1:5000/signup", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "*",
        },
        formdata,
      })
      .then((res) => {
        console.log(res);
        console.log(res.statusText);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{height:"80vh"}}>
    <div className="container mt-4 shadow-lg p-5 mb-2 bg-white rounded">
      <div className="row">
        <div className="col-md-7 d-flex justify-content-center">
            <div className="d-flex align-items-center">
          <img src={image} alt="Form" className="img-fluid" />
          </div>
        </div>
        <div className=" col-md-5 mt-4">
          <h4 className="m-auto text-center">Sign Up Form</h4>
          <form className=" mt-4" onSubmit={handleSubmit} method="post">
            <div className="form-group">
              <label for="firstname">First Name :</label>
              <input
                class="form-control"
                type="text"
                name="name"
                id="firstname"
                value={formdata.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="email">Email :</label>
              <input
                class="form-control"
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="username">Username :</label>
              <input
                class="form-control"
                type="text"
                id="username"
                name="username"
                value={formdata.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input
                class="form-control"
                type="password"
                id="password"
                name="password"
                value={formdata.password}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            </div>
          </form>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="d-flex justify-content-center mt-2">
                <p className="mt-2">Already a user?</p>
                <div>
                  <button
                    className="btn btn-primary ml-2 mb-2"
                    onClick={() => history.push("/login")}
                  >
                    Login Here!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Form;