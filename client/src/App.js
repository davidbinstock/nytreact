import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NoMatch from "./Pages/NoMatch";
import Home from "./Pages/Home";

const App = () => {
  return (
  <Router>
      <div>
        <div className="jumbotron text-center">
          <h1 className="display-4">NYT Article Scrapper</h1>
          <p className="lead">Search and save articles from the New York Times</p>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
  </Router>
)};

export default App;
