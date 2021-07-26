import React from 'react';
// import Form from './Form';
import Login from './Login';
import { BrowserRouter,Switch } from "react-router-dom";
import Landing from './Landing';
import Home from './Home';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';


function App() {
    return (
        <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PrivateRoute component={Landing} path="/landing" exact />
        </Switch>
      </BrowserRouter>
    )
}

export default App;
