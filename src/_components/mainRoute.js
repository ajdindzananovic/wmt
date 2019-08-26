import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

import HomePage from "./HomePage";
import Task from "./Task";
import WebSite from "./WebSite";
import Project from "./Project";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/website" component={WebSite} />
      <Route path="/task" component={Task} />
      <Route path="/project" component={Project} />
      <Route component={NotFound} />
    </Switch>
  );
};
