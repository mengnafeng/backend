import React from 'react'
import Home from "../../pages/home/home";
import Mine from "../../pages/mine/mine";
import List from "../../pages/list/list";
import Detail from "../../pages/detail/detail";
import Goods from "../../pages/goods/goods";
import RestrictRoute from '../RestrictRoute/index'

import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

import './index.scss'

const ContentMain = (props) => {
  return (
    <div key={props.location.key}> 
      <Router>
        <Switch>
          <Route exact path="/admin" component={Home} />
          <RestrictRoute exact path="/admin/home" component={Home}></RestrictRoute>
          <RestrictRoute exact path="/admin/goods" component={Goods}></RestrictRoute>
          <RestrictRoute exact path="/admin/detail" component={Detail}></RestrictRoute>
          <RestrictRoute exact path="/admin/mine" component={Mine}></RestrictRoute>
          <RestrictRoute exact path="/admin/list" component={List}></RestrictRoute>
          <Redirect exact from="/" to="/admin/home" />
        </Switch>
      </Router>
    </div>
  )
}


export default withRouter(ContentMain);