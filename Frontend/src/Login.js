import React,{useState} from "react";
import axios from 'axios';
function Login() {
    const [formdata,setFormData] = useState({
        username :'',
        password:''
    })
    const handleChange = (e) => {
        //Handle change for all form elements together.
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${formdata.username} Password: ${formdata.password}`)
        axios.post('http://127.0.0.1:5000/login',{
            headers: {"Access-Control-Allow-Origin": "*",
                   "Access-Control-Allow-Credentials" :'true',
                   'Access-Control-Allow-Methods': "*",
                  }, formdata
        })
        .then(res=>{
            console.log(res)
            console.log(res.statusText)
        })
        .catch(err=>console.log(err));
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-2 d-flex justify-content-center">
          <form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="username">Username: </label>
              <input
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
