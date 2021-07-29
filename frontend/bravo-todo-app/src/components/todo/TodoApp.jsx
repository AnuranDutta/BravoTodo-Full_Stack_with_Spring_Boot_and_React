import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute.js";
import ErrorComponent from "./ErrorComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import HeaderComponentWithRouter from "./HeaderComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import RegisterComponent from "./RegisterComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";

export default class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponentWithRouter />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <Route path="" component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}