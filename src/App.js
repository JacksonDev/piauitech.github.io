import React from 'react';
import Home from './Routes/Home/';
import './Stylesheets/app.styl';
import { Router, Route, hashHistory } from 'react-router';

const App = React.createClass({
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}></Route>
      </Router>
    );
  },
});

export default App;
