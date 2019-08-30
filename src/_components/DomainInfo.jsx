import React, { Component } from "react";
import Joi from "joi-browser";

//import format from "date-fns/format";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Form from "../_components/common/form";
import {
  saveDomainInfoFormToDatabase,
  getDomainInfoDataFromDatabase
} from "../helpers/domainInfoservice";

import "../css/datePicker.css";

class DomainInfo extends Form {
  state = {
    siteRegistredFromDate: null,
    endOfActivityDate: null,

    data: {
      siteName: "",
      domainOwner: "",
      personForPayment: "",
      personForAdministration: ""
    },
    errors: {}
  };
  handleDatePickerChange = (dateName, dateValue) => {
    let { siteRegistredFromDate, endOfActivityDate } = this.state;
    if (dateName === "siteRegistredFromDate") {
      siteRegistredFromDate = dateValue;
    } else {
      endOfActivityDate = dateValue;
    }
    this.setState({
      siteRegistredFromDate,
      endOfActivityDate
    });
  };

  schema = {
    siteName: Joi.string()
      .required()
      .label("siteName"),

    domainOwner: Joi.string()
      .required()
      .label("domainOwner"),

    personForPayment: Joi.string()
      .required()
      .label("personForPayment"),

    personForAdministration: Joi.string()
      .required()
      .label("personForAdministration")
  };
  doOnSubmit = () => {
    // console.log(document.getElementById("siteRegistredFromDate").value);
    // console.log(this.state.siteRegistredFromDate);

    // call server

    console.log("submitted");
    saveDomainInfoFormToDatabase(
      this.state.siteRegistredFromDate,
      this.state.endOfActivityDate,
      this.state.data.siteName,
      this.state.data.domainOwner,
      this.state.data.personForPayment,
      this.state.data.personForAdministration
    );
  };

  componentDidMount() {
    let temp = getDomainInfoDataFromDatabase();

    this.setState({
      siteRegistredFromDate: temp.siteRegistredFromDate,
      endOfActivityDate: temp.endOfActivityDate,
      data: {
        siteName: temp.data.siteName,
        domainOwner: temp.data.domainOwner,
        personForPayment: temp.data.personForPayment,
        personForAdministration: temp.data.personForAdministration
      }
    });
  }

  handleDateChangeRaw = e => {
    // so user can't enter data manualy
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2 className="statusTitle">Domain info</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          {this.renderInput("siteName", "text", "siteName")}
          <label>Site registred from date</label>
          <DatePicker
            id="siteRegistredFromDate"
            name="siteRegistredFromDate"
            className="form-control"
            onChange={date =>
              this.handleDatePickerChange("siteRegistredFromDate", date)
            }
            onChangeRaw={this.handleDateChangeRaw}
            selected={this.state.siteRegistredFromDate}
            value={this.state.siteRegistredFromDate}
            dateFormat="dd.MM.yyyy"
          />
          <label>End of activity date</label>
          <DatePicker
            id="endOfActivityDate"
            name="endOfActivityDate"
            className="form-control"
            onChange={date =>
              this.handleDatePickerChange("endOfActivityDate", date)
            }
            onChangeRaw={this.handleDateChangeRaw}
            selected={this.state.endOfActivityDate}
            value={this.state.endOfActivityDate}
            dateFormat="dd.MM.yyyy"
          />

          {this.renderInput("domainOwner", "text", "domain Owner")}
          {this.renderInput("personForPayment", "text", "personForPayment")}
          {this.renderInput(
            "personForAdministration",
            "text",
            "personForAdministration"
          )}
          {this.randerButton("Save")}
        </form>
      </div>
    );
  }
}

export default DomainInfo;
