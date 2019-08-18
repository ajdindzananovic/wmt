import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WebSiteProjects extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <p>
              <Link to="/domainInfo">Domain Info</Link>
            </p>
            <p>
              <Link to="/siteCredentials">Credentials</Link>
            </p>
            <p>
              <Link to="/siteStatus">Status</Link>
            </p>
          </div>
          <div className="col-sm-8 text-left">
            <h1>Welcome</h1>
            WebSiteProjects
          </div>
        </div>
      </div>
    );
  }
}
