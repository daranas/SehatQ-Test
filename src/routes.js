import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import Home from './containers/Home';
import Product from './containers/Product/detail';
import Purchased from './containers/Purchased';
import Wishlist from './containers/Wishlist';
import Auth from './containers/Auth';

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cart" component={Purchased}/>
        <Route path="/profile" component={Wishlist}/>
        <Route path="/product/:productId" component={Product}/>
        {/* auth */}
        <Route path="/auth" component={Auth}/>
      </Switch>
    );
  }
}

export default Routes;