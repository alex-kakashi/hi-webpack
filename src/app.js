import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NoMatch from './views/no-match'
import Home from './views/home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}