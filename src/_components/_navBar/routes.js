import React from "react";
import { Link } from "react-router-dom";

export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: null
  },
  {
    path: "/website",
    sidebar: (
      <ul>
        <li key="websiteinfo">
          <Link to="/websiteinfo">Web Site Info</Link>
        </li>
        <li key="credentials">
          <Link to="/credentials">Credentials</Link>
        </li>
        <li key="status">
          <Link to="/status">Status</Link>
        </li>
      </ul>
    )
  },
  {
    path: "/tasks",
    sidebar: (
      <ul>
        <li key="TaskLink">
          <Link to="/taskLink">Taks Link 2</Link>
        </li>
        <li key="TaskLink2">
          <Link to="/taskLink2">Another Taks Link</Link>
        </li>
      </ul>
    )
  },
  {
    path: "/projects",
    sidebar: (
      <ul>
        <li key="projectLink">
          <Link to="/projectLink">Project Link</Link>
        </li>
        <li key="projectLink2">
          <Link to="/projectLink3">Another Project Link</Link>
        </li>
      </ul>
    )
  }
];

export default {
  routes
};
