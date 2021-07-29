import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService.js";

export default class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonMessage: "Show Tech-stack",
      welcomeMessage: "",
    };

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  retrieveWelcomeMessage() {
    // HelloWorldService.executeHelloWorldService()
    // .then((response) => this.handleSuccessfulResponse(response));

    // HelloWorldService.executeHelloWorldBeanService()
    // .then((response) => this.handleSuccessfulResponse(response));

    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
  }

  handleSuccessfulResponse(response) {
    // console.log(response);
    this.setState({
      welcomeMessage:
        this.state.welcomeMessage === "" ? response.data.message : "",
      buttonMessage: this.state.buttonMessage === "Show Tech-stack" ? "Hide" : "Show Tech-stack",
    });
  }

  handleError(error) {
    let errorMessage = "";
    if (error.Message) errorMessage += error.message;

    if (error.response && error.response.data)
      errorMessage += error.response.data.message;

    this.setState({ welcomeMessage: errorMessage });
  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name} <br /> You can manage your todos{" "}
          <Link to="/todos">HERE</Link>{" "}
        </div>
        <div className="container">
          <br />
          <button
            ref={(input) => {
              this.ref_clickMe = input;
            }}
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-lg btn-success"
          >
            {this.state.buttonMessage}
          </button>
        </div>
        <div className="container text-primary">
          <br />
          {this.state.welcomeMessage.split("\n")[0]}
          <br />
          {this.state.welcomeMessage.split("\n")[1]}
        </div>
      </>
    );
  }
}
