import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import "../css/Sidebar.css";
import ContentRoute from "./ContentRoute";

let options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default class WebSite extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-2 sidenav">
          <div className="selectDropDown">
              <Select options = {options} onChange={this.handleChange}/>
              </div>
            <ul>
              <li key="domainInfoForm">
                <Link to={`${this.props.match.url}/domaininfo`}>
                  Domain Info
                </Link>
              </li>
              <li key="credentials">
                <Link to={`${this.props.match.url}/credentials`}>
                  Credentials
                </Link>
              </li>
              <li key="status">
                <Link to={`${this.props.match.url}/status`}>Status</Link>
              </li>
            </ul>
          </div>

          <div className="col-10 text-left">
            <ContentRoute location={this.props.location.pathname} state={this.state} />
          </div>
        </div>
      </div>
    );
  }
}
