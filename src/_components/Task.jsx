import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContentRoute from "./ContentRoute";

export default class Task extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-2 sidenav">
            <ul>
              <li key="taskone">
                <Link to={`${this.props.match.url}/taskone`}>Task One</Link>
              </li>
              <li key="tasktwo">
                <Link to={`${this.props.match.url}/tasktwo`}>Task Two</Link>
              </li>
              <li key="tasktree">
                <Link to={`${this.props.match.url}/tasktree`}>Task Tree</Link>
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
