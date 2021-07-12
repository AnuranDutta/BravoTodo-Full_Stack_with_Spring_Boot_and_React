import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

export default class LoginComponent extends Component {
  //this is a controlled component
  constructor(props) {
    super(props);
    this.state = {
      username: "Admin",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginClicked() {
    if (this.state.username === "Admin" && this.state.password === "dummy") {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      // this.setState({showSuccessMessage:true})
      // this.setState({hasLoginFailed:false})
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <form className="col-md-4">
          <div className="form-group">
            <h1>Login</h1>
            {this.state.hasLoginFailed && (
              <div className="alert alert-warning">Invalid Credentials</div>
            )}
          </div>
          <div className="form-group">
            {this.state.showSuccessMessage && <div>Successful!</div>}
            <label htmlFor="username-ip">User Name</label>
            <input
              id="username-ip"
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-ip">Password</label>
            <input
              id="password-ip"
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.loginClicked}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
