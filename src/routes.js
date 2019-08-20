import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./_components/Home";
import NotFound from "./_components/NotFound";

import Status from "./_components/Status";
import WebSiteInfo from "./_components/WebSiteInfo";
import TaskOne from "./_components/TaskOne";

export default () => {
  return (
    <Switch>
      <Route path="/website" component={props => <Home {...props} />} />

      <Route path="/status" component={Status} />
      <Route path="/websiteinfo" component={WebSiteInfo} />
      <Route path="/taskOne" component={TaskOne} />

      <Route component={NotFound} />
    </Switch>
  );
};
