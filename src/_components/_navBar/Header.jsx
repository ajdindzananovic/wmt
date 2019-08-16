import React, { Component } from "react";
import Logo from "../../images/logo.png";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import WebSite from "../_webSite/WebSite";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <img className="navbar-brand" src={Logo} alt="webiste logo" />
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <Link ŧø="/Website">Web Site</Link>
                  </li>
                  <li>
                    <Link to="/tasks">Tasks</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-log-in" /> Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Route path="/website" component={WebSite} />
        </Router>
      </React.Fragment>
    );
  }
}
