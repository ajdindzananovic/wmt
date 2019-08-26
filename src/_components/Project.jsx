import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContentRoute from "./ContentRoute";

export default class Project extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-2 sidenav">
            <ul>
              <li key="projectone">
                <Link to={`${this.props.match.url}/projectone`}>
                  Project One
                </Link>
              </li>
              <li key="projectwo">
                <Link to={`${this.props.match.url}/projectwo`}>
                  Project Two
                </Link>
              </li>
              <li key="projecttree">
                <Link to={`${this.props.match.url}/projecttree`}>
                  Project Tree
                </Link>
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
