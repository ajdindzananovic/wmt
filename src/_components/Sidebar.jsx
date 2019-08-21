import React, { Component } from "react";
import Routes from "../routes";
import routeLinks from "../_components/routeLinks";
import websites from "./listOfWebSites";

import "./css/Sidebar.css";
import { Dropdown } from "react-bootstrap";

export default class Sidebar extends Component {
  renderDropDownButton = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle title="Dropdown button" id="dropdown-basic-button">
          Select WebSite
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {websites.map(website => {
            return <Dropdown.Item>{website}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-2 sidenav">
            {this.props.state.currentLocation === "/website"
              ? this.renderDropDownButton()
              : null}

            {routeLinks.map(route =>
              route.path === this.props.state.currentLocation
                ? route.sidebar
                : null
            )}
          </div>
          <div className="col-10 text-left">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}
