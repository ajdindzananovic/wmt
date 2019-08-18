import React, { Component } from "react";
import Joi from "joi-browser";
import mainLogo from "../../images/logo.png";

import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  doOnSubmit = () => {
    // call server
    console.log("submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Login</h1>
            <div className="account-wall">
              <img className="profile-img" src={mainLogo} alt="" />
              <form onSubmit={this.handleSubmit} className="form-signin">
                {this.renderInput("username", "text", "Username")}
                {this.renderInput("password", "password", "Password")}
                {this.randerButton("Login")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
