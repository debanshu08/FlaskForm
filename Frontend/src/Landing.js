import React, { Fragment } from 'react';
// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { logout, isLogin } from './utils';
import { useHistory } from 'react-router-dom';
import Dashboard from './assests/undraw_Dashboard_re_3b76.png'
import Graph from './assests/undraw_visual_data_re_mxxo.png'
import DataTrends from './assests/undraw_Data_trends_re_2cdy.png'
import Analytics from './assests/undraw_Analytics_re_dkf8.png'
function Landing(props) {
    // const access_token = window.localStorage.getItem('jwt')
    // console.log(access_token)
    // // const [auth, setAuth] = useState(false);
    // // const [userno,setUserNo] = useState("");
    const history = useHistory();
    // const handleClick = () => {
    //     history.push('/login');
    // }
    // const handleLogout = () => {
    //     localStorage.removeItem('jwt');
    //     history.push('/login');
    // }
    // useEffect(() => {
    //     if (access_token) {
    //         axios.get('http://127.0.0.1:5000/landing', {
    //             headers: {
    //                 'Authorization': `Bearer ${access_token}`
    //             }
    //         })
    //             .then((res) => {
    //                 console.log(res)
    //                 setUserNo(res.data.logged_in_as)
    //                 setAuth(true);
    //             })
    //             .catch((error) => {
    //                 console.error(error)
    //                 history.push('/login');
    //             })
    //     }
    //     else {
    //         alert('Login')
    //         history.push("/login");
    //     }
    // }, []);

    const handleLogout = () => {
        logout();
        history.push("/")
    }
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#9a9aff' }}>
                <a class="navbar-brand ml-2" href="#" style={{ color: "white" }}>Dashboard</a>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ color: "white" }}>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            {/* <a class="nav-link" style={{ color: "white" }} href="#">Home <span class="sr-only">(current)</span></a> */}
                        </li>
                    </ul>
                </div>
                <button class="btn my-2 my-sm-0" style={{ backgroundColor: "orange", color: "#fff" }} onClick={handleLogout} type="submit">Logout</button>
            </nav>

            {/* <div className="container">
                <p> Hey Man!</p>
               
            </div> */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Dashboard} alt="Dashboard" className="img-fluid" />
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 class="display-4">Hey User!</h1>
                        <p class="lead">Welcome to our website!</p>
                        <hr class="my-4" />
                        {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
                        {/* <button className="btn btn-primary" onClick={handleLogout}>Click to Logout</button> */}
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="card-deck">
                                <div class="card">
                                    <img src={Graph} class="card-img-top" alt="..." />
                                    {/* <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div> */}

                                </div>
                                <div class="card">
                                    <img src={DataTrends} class="card-img-top" alt="..." />
                                    {/* <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div> */}
                                </div>
                                <div class="card">
                                    <img src={Analytics} class="card-img-top" alt="..." />
                                    {/* <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )

}
export default Landing;
