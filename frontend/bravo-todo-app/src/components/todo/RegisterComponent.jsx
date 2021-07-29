import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default class RegisterComponent extends Component {
  //this is a controlled component
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasRegistrationFailed: false,
      showSuccessMessage: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
      console.log("clicked")
  }

  render() {
    let { username, password } = this.state;

    return (
      <div>
        <h1>Sign Up</h1>
        <div className="row justify-content-center">
          <Formik
            initialValues={{ username, password}}
            onSubmit={this.onSubmit}
            validationSchema={Yup.object({
              username: Yup.string()
                .min(3, "Must be 3 Characters or more")
                .required("Required"),
              password: Yup.string()
                .min(3, "Must be 3 Characters or more")
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            })}
          >
            <Form className="col-md-4">
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-warning"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-warning"
              />
              {this.state.showSuccessMessage && <div>Successful!</div>}
              <fieldset className="form-group">
                <label htmlFor="username">User Name</label>
                <Field
                  className="form-control"
                  type="text"
                  name="username"
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                />
              </fieldset>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}
