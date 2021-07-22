import React from 'react';
import Form from './Form';
import Login from './Login';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";


function App() {
    return (
        <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <Form/>
                </Route>
                <Route path="/login">
            <Login/>
            </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default App;
