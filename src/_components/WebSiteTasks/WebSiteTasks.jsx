import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";

import DomainInfo from "../_webSite/DomainInfo";

export default class WebSiteTasks extends Component {
  render() {
    return (
      <Router>
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
              Welcome to webSiteTaks
            </div>
          </div>
        </div>
        <Route path="/domainInfo" component={DomainInfo} />
      </Router>
    );
  }
}
