import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../_components/common/form";

export default class Credentials extends Form {
  state = {
    data: { locationName: "", locationUrl: "", username: "", password: "" },
    errors: {}
  };

  schema = {
    locationName: Joi.string()
      .required()
      .label("locationName"),
    locationUrl: Joi.string()
      .required()
      .label("locationUrl"),
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
    return (
      <div>
        <h2 className="statusTitle">Credentials</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          {this.renderInput("locationName", "text", "location name")}
          {this.renderInput("locationUrl", "text", "location url")}
          {this.renderInput("username", "text", "Username")}
          {this.renderInput("password", "text", "Password")}
          {this.randerButton("Save")}
        </form>
      </div>
    );
  }
}
