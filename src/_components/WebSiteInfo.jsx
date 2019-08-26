import React, { Component } from "react";
import * as moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class WebSiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
  }

  dateChange = date => {
    this.setState(
      {
        startDate: moment(date).format("YYYY-MM-DD")
      },
      () => console.log(this.state.date)
    );
  };
  render() {
    return (
      <div>
        <h1>Welcome to websiteinfo</h1>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={moment(this.state.startDate).toDate()}
          onChange={this.dateChange}
        />
      </div>
    );
  }
}
