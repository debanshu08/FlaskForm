import React, { Component } from 'react';
import { logout, isLogin } from './utils';
// import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Form from './Form';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }
    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                {/* <h1>Home</h1> */}

                {this.state.isLogin ? 
                    // <button className="btn btn-primary" onClick={() => this.handleLogout()}>Click here to log out</button>
                    <Redirect to="/landing" />
                    : <Form/>
                }
            </div>
        );
    }
}

export default Home;