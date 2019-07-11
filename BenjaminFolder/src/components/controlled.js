import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

class Controlled extends Component {
  state = {
    name: "",
    lastname: ""
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleLastnameChange = event => {
    this.setState({
      lastname: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="contrainer">
        <form className="form-inline" onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label>Enter name</label>

            <input
              type="text"
              className="form-control input-sm"
              onChange={this.handleNameChange}
              value={this.state.name}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>

            <input
              type="text"
              className="form-control"
              value={this.state.lastname}
              onChange={this.handleLastnameChange}
              placeholder="Enter your lastname"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Controlled;
