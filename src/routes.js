import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./_components/Home";
import NotFound from "./_components/NotFound";

import Status from "./_components/Status";

import TaskOne from "./_components/TaskOne";
import DomainInfoForm from "./_components/_forms/DomainInfoForm";

export default () => {
  return (
    <Switch>
      <Route path="/website" component={props => <Home {...props} />} />

      <Route path="/status" component={Status} />
      <Route path="website/domainInfoForm" component={DomainInfoForm} />

      <Route path="/taskOne" component={TaskOne} />

      <Route component={NotFound} />
    </Switch>
  );
};
