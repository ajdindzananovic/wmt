import React, { Component } from "react";
import Input from "../common/input";
import Joi from "joi-browser";
class Form extends Component {
  /* 
  
    Function description:

   * handleChange - take value from input,field validation on change and update state.

   * handleSubmit - what happens when we click submit.In the form that extends 
     this form it is necessary to implement the doOnSubmit function 
     and define what will happen when submitting.
     For example, call server and insert data.
     We also do form validation.
    
   * randerButton - render button dynamic.
   * renderInput  - render input field dynamic. You need to send this function:
                                  *name of input field 
                                  *type of input field
                                  *label of input field
   * validation - do form validation.
   * validationProperty - do field validation on change.
   
    */

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    //property validation on change
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    this.setState({ data, errors });
  };

  handleSubmit = e => {
    e.preventDefault();

    // form validation on submit
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

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
    const { data, errors } = this.state;
    return (
      <Input
        onChange={this.handleChange}
        value={data[name]}
        name={name}
        type={type}
        label={label}
        error={errors[name]}
      />
    );
  }
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
}

export default Form;
