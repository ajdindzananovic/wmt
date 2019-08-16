import React, { Component } from "react";

import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" }
  };
  doOnSubmit = () => {
    // call server
    console.log("submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Username", "text", "Username")}
        {this.renderInput("Password", "password", "Password")}
        {this.randerButton("Login")}
      </form>
    );
  }
}

export default LoginForm;
