import React, { Component } from "react";

export default class WebSite extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-8 text-left">
            <h1>Welcome</h1>
            This is web Site default info page
          </div>
        </div>
      </div>
    );
  }
}
