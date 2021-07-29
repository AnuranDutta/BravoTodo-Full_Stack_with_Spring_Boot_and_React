import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

export default class LoginComponent extends Component {
  //this is a controlled component
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadDemoAccount = this.loadDemoAccount.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  loadDemoAccount() {
    this.usernameElement.value = "admin";
    this.passwordElement.value = "dummy";
    this.setState({
      username: this.usernameElement.value,
      password: this.passwordElement.value,
    });
  }

  loginClicked() {
    // AuthenticationService.executeBasicAuthenticationService(
    //   this.state.username,
    //   this.state.password
    // )

    AuthenticationService.executeJwtAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.username,
          response.data.token
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
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
              ref={(input) => {
                this.usernameElement = input;
              }}
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
              ref={(input) => {
                this.passwordElement = input;
              }}
              id="password-ip"
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.loginClicked}
            >
              Login
            </button>
          </div>
          <br />
          <div className="form-group">
            Don't want to create an account? <br />
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              onClick={this.loadDemoAccount}
            >
              Click Here
            </button>
            &nbsp; to load demo credentials.
          </div>
        </form>
      </div>
    );
  }
}
