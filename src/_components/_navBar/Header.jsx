import React, { Component } from "react";
import Logo from "../../images/logo.png";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import loginForm from "../_forms/loginForm";
import Body from "./Body";

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
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/website">Web Site</Link>
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
                    <Link to="/login">
                      <span className="glyphicon glyphicon-log-in" /> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Route path="/login" component={loginForm} />
          <Route exact path="/" render={() => <Body pathName="/home" />} />
          <Route path="/website" render={() => <Body pathName="/website" />} />
          <Route path="/tasks" render={() => <Body pathName="/tasks" />} />
          <Route
            path="/projects"
            render={() => <Body pathName="/projects" />}
          />
        </Router>
      </React.Fragment>
    );
  }
}
