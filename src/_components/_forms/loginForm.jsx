import React from "react";

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
      <div className="container-fluid text-center">
        <div className="row content">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("Username", "text", "Username")}
            {this.renderInput("Password", "password", "Password")}
            {this.randerButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
