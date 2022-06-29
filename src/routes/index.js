import React from "react";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import PrivateRoute from '../components/PrivateRoute/index'
import Main from '../components/Main/index'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute path="/admin" component={Main} />
          <Redirect exact from="/" to="/admin" />
        </Switch>
      </Router>
    </div>
  )
}
export default App;