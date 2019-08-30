import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "../../css/datePicker.css";

export default class PopUpModalContent extends Component {
  render() {
    return (
      <div className="modalContent">
        <h1>Edit content</h1>
        <form>
          <div className="form-group">
            <label>Id</label>
            <input
              type="text"
              className="form-control"
              value={this.props.state.activityData.id}
            />
          </div>
          <div className="form-group">
          <label>Datum</label>
            <DatePicker
              dateFormat="dd-MM-yyyy"
              className="form-control"
              selected={this.props.state.datePickerDate}
              onChange={this.props.dateChange}
            />
          </div>

          <div className="form-group">
            <label>Activity</label>
            <input
              type="text"
              className="form-control"
              value={this.props.state.activityData.activity}
              onChange={this.props.dateChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={this.props.state.activityData.description}
              onChange={this.props.handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={this.props.onHandleSubmit}
          >
            Save
          </button>
          <button
            type="cancel"
            className="btn btn-outline-secondary"
            onClick={this.props.closeModal}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
