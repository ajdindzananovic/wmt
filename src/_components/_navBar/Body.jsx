import React, { Component } from "react";
import WebSite from "../_webSite/WebSite";
import { routes } from "./routes";
import WebSiteTasks from "../WebSiteTasks/WebSiteTasks";
import WebSiteProjects from "../WebSiteProjects/WebSiteProjects";

export default class Body extends Component {
  renderSwitch = () => {
    switch (this.props.pathName) {
      case "/webSite":
        return <WebSite />;
      case "/task":
        return <WebSiteTasks />;
      case "/project":
        return <WebSiteProjects />;

      default:
        break;
    }
  };
  render() {
    console.log(routes.path);
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav">
            {routes.map(route => {
              return route.path === this.props.pathName ? route.sidebar : null;
            })}
          </div>

          <div className="col-sm-8 text-left">{this.renderSwitch()}</div>
        </div>
      </div>
    );
  }
}
