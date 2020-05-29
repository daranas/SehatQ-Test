import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import Home from './containers/Home';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    );
  }
}

export default Routes;