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

  handleSubmit = event => {
    event.preventDefault();

    const values = {
      name: this.name.value,
      lastname: this.lastname.value
    };
    console.log(values);
  };

  render() {
    return (
      <div className="contrainer">
        <form className="form-inline">
          <div className="form-group">
            <label>Enter name</label>

            <input
              type="text"
              className="form-control input-sm"
              placeholder="Enter your name"
              ref={input => (this.name = input)}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your lastname"
              ref={input => (this.lastname = input)}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Controlled;
