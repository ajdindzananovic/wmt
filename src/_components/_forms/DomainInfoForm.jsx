import React from "react";
import Joi from "joi-browser";
import { saveDomain } from "../_services/domainServices";
import Form from "../common/form";

class DomainInfoForm extends Form {
  state = {
    data: {
      siteName: "",
      siteRegistredFromDate: new Date(),
      domainOwner: "",
      personForPayment: "",
      personForAdministration: ""
    },
    errors: {}
  };
  schema = {
    siteName: Joi.string()
      .required()
      .label("siteName"),

    siteRegistredFromDate: Joi.string()

      .required()
      .label("siteRegistredFromDate"),

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

  doOnSubmit = async () => {
    await saveDomain(this.state.data);
    console.log("submit -klik");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("siteName", "text", "siteName")}

          {this.renderInput(
            "siteRegistredFromDate",
            "text",
            "siteRegistredFromDate"
          )}
          {this.renderInput("sidomainOwnerteName", "text", "domainOwner")}
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

export default DomainInfoForm;
