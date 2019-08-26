import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/Sidebar.css";
import ContentRoute from "./ContentRoute";

export default class WebSite extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-2 sidenav">
            <ul>
              <li key="domainInfoForm">
                <Link to={`${this.props.match.url}/domaininfo`}>
                  Domain Info
                </Link>
              </li>
              <li key="credentials">
                <Link to={`${this.props.match.url}/credentials`}>
                  Credentials
                </Link>
              </li>
              <li key="status">
                <Link to={`${this.props.match.url}/status`}>Status</Link>
              </li>
            </ul>
          </div>

          <div className="col-10 text-left">
            <ContentRoute location={this.props.location.pathname} />
          </div>
        </div>
      </div>
    );
  }
}
