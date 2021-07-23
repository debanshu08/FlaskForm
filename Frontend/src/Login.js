import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [formdata, setFormData] = useState({
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
      `Username: ${formdata.username} Password: ${formdata.password}`
    );
    axios
      .post("http://127.0.0.1:5000/login",{
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
        window.localStorage.setItem("jwt", res.data.token);
        history.push("/landing");
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
          history.push("/");
          alert("User Doesn't exist, signup!");
        }
      });
  };
  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center m-auto mt-6">Login </h4>
        <div className="col-md-12 mt-4 d-flex justify-content-center">
          <form method="post" onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
