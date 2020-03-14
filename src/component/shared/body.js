import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../tabs/dashboard";
import About from "../tabs/about";
import "../../assets/styles/shared/body.css";

const Body = () => {
  return (
    <div className="body-container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/home">
            <Dashboard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Body;
