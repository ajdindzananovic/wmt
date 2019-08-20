import React, { Component } from "react";
import "./css/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          <p>Demonstration of routing</p>
        </div>
      </div>
    );
  }
}
