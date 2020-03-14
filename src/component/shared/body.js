import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../tabs/dashboard";
import "../../assets/styles/shared/body.css";

const Body = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default Body;
