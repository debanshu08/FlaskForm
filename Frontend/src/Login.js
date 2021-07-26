import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { login } from './utils';
import logImage from './assests/undraw_Profile_data_re_v81r.png'

function Login(props) {
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
  });
  // const history = useHistory();
  const handleChange = (e) => {
    //Handle change for all form elements together.
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSignUp = ()=>{
    props.history.push("/")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Username: ${formdata.username} Password: ${formdata.password}`
    );
    axios
      .post("http://127.0.0.1:5000/login", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "*",
        },
        formdata,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        // window.localStorage.setItem("jwt", res.data.token);
        // history.push("/landing");
        login(res.data.token);
        props.history.push("/landing");
      })
      .catch((err) => {
        const errMessage = err.response.data;
        if ("userError" in errMessage) {
          alert("Username incorrect");
          setFormData({
            username: "",
            password: "",
          });
        }
        if ("passError" in errMessage) {
          alert("Password Incorrect");
          setFormData({
            username: "",
            password: "",
          });
        }
        if ("error" in errMessage) {
          props.history.push("/");
          alert("User Doesn't exist, signup!");
        }
      });
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-7 d-flex justify-content-center">
        <div className="d-flex align-items-center">
        <img src={logImage} alt="Form" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-5 mt-4">
        <h4 className="text-center m-auto mt-6">Login </h4>
          <form method="post" onSubmit={handleSubmit} className="mt-3">
            <div className="form-group">
              <label for="username">Username: </label>
              <input
                class="form-control"
                type="text"
                name="username"
                id="username"
                value={formdata.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="password">Password: </label>
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
        <div className="col-md-12 d-flex justify-content-center">
          <div className="d-flex mt-2">
            <p className="mt-2">New User?</p>
            <div>
              <button className="btn btn-primary ml-2 mb-2" onClick={handleSignUp}>
                Sign Up Here!
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
