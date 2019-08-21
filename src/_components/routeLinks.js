import React from "react";
import { Link } from "react-router-dom";

const route = [
  {
    path: "/website",
    sidebar: (
      <ul>
        <li key="domainInfoForm">
          <Link to="/domainInfoForm">Domain info 2</Link>
        </li>
        <li key="credentials">
          <Link to="/credentials">Credentials 2</Link>
        </li>
        <li key="status">
          <Link to="/status">Status2 </Link>
        </li>
      </ul>
    )
  },
  {
    path: "/task",
    sidebar: (
      <ul>
        <li key="taskOne">
          <Link to="/taskOne">Task One</Link>
        </li>
        <li key="taskTwo">
          <Link to="/taskTwo">Task two</Link>
        </li>
        <li key="taskTree">
          <Link to="/taskTree">Task Tree</Link>
        </li>
      </ul>
    )
  },
  {
    path: "/project",
    sidebar: (
      <ul>
        <li key="projectOne">
          <Link to="/projectOne">Projecet One</Link>
        </li>
        <li key="projectTwo">
          <Link to="/projectTwo">Project two</Link>
        </li>
        <li key="projectTree">
          <Link to="/projectTree">Project Tree</Link>
        </li>
      </ul>
    )
  }
];

export default route;
