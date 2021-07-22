import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function Landing() {
    const access_token = window.localStorage.getItem('jwt')
    console.log(access_token)
    const [auth, setAuth] = useState(false);
    const [userno,setUserNo] = useState("");
    const history = useHistory();
    const handleClick = () => {
        history.push('/login');
    }
    const handleLogout = () => {
        localStorage.removeItem('jwt');
        history.push('/login');
    }
    useEffect(() => {
        if (access_token) {
            axios.get('http://127.0.0.1:5000/landing', {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
                .then((res) => {
                    console.log(res)
                    setUserNo(res.data.logged_in_as)
                    setAuth(true);
                })
                .catch((error) => {
                    console.error(error)
                    history.push('/login');
                })
        }
        else {
            alert('Login')
            history.push("/login");
        }
    }, []);

    return (
        auth ? <div>
            <p> Hey Mr User Number {userno} !</p>
            <button className="btn btn-primary" onClick={handleLogout}>
                Click here to logout
            </button>
        </div> : <div>
            You need to Login!
            <button onClick={handleClick}>Click here to Login</button>
        </div>
    )

}
export default Landing;
