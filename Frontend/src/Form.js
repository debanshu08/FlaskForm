import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
function Form() {
    const [formdata, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })
    const history = useHistory();
    const handleChange = (e) => {
        //Handle change for all form elements together.
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${formdata.username} Email: ${formdata.email} Password: ${formdata.password}`)
        axios.post('http://127.0.0.1:5000/signup',{
            headers: {"Access-Control-Allow-Origin": "*",
                   "Access-Control-Allow-Credentials" :'true',
                   'Access-Control-Allow-Methods': "*",
                  }, formdata
        })
        .then(res=>{console.log(res)
            console.log(res.statusText)
            history.push('/login');
        })
        .catch(err=>console.log(err));
    }

return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 mt-2 d-flex justify-content-center">
                <form onSubmit={handleSubmit} method="post">
                    <div className="form-group">
                        <label for="firstname">First Name :</label>
                        <input type="text" name="name" id="firstname" value={formdata.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="email">Email :</label>
                        <input type="email" id="email" name="email" value={formdata.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="username">Username :</label>
                        <input type="text" id="username" name="username" value={formdata.username} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" value={formdata.password} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Form;
