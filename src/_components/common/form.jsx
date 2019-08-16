import React, { Component } from "react";
import Input from "../common/input";
class Form extends Component {
  /* 
  
    Function description:

   * handleChange - take value from input and update state.

   * handleSubmit - what happens when we click submit.In the form that extends 
     this form it is necessary to implement the doOnSubmit function 
     and define what will happen when submitting.
     For example, call server and insert data.
    
   * randerButton - render button dynamic.
   * renderInput  - render input field dynamic. You need to send this function:
                                  *name of input field 
                                  *type of input field
                                  *label of input field
    
    */

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.doOnSubmit();
  };

  randerButton(label) {
    return (
      <button type="submit" className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderInput(name, type, label) {
    const { data } = this.state;
    return (
      <Input
        onChange={this.handleChange}
        value={data[name]}
        name={name}
        type={type}
        label={label}
      />
    );
  }
}

export default Form;
