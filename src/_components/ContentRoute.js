import React, { Component } from "react";
import { Route } from "react-router-dom";

import DomainInfo from "./DomainInfo";
import NotFound from "./NotFound";
import Status from "./Status";
import Credentials from "./Credentials";
import WebSiteHome from "./WebSiteHome";
import TaskOne from "./TaskOne";

export default class ContentRoute extends Component {
  render() {
    return (
      <div>
        <Route
          path={this.props.location}
          render={() => {
            switch (this.props.location) {
              case "/website":
                return <WebSiteHome state={this.props.state}/>;
              case "/website/domaininfo":
                return <DomainInfo state={this.props.state}/>;
              case "/website/status":
                return <Status state={this.props.state} />;
              case "/website/credentials":
                return <Credentials state={this.props.state}/>;
              case "/task/taskone":
                return <TaskOne />;

              default:
                return <NotFound />;
            }
          }}
        />
      </div>
    );
  }
}
