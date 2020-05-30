import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import Home from './containers/Home';
import Purchased from './containers/Purchased';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/profile" component={Purchased}/>
      </Switch>
    );
  }
}

export default Routes;