import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TableBody from "./common/status_table_body";
import Modal from "react-awesome-modal";
import PopUpModalContent from "./common/PopUpModalContent";
import moment from "moment";



class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      activityData: {},
      datePickerDate: new Date()
    };
  }

  openModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  closeModal = () => {
    this.setState({
      visibleModal: false
    });
  };

  goBack = () => {
    this.setState({
      visibleModal: false
    });
  };

  handleEditIdClick = item => {
    this.setState({
      activityData: item,
      datePickerDate: moment(item.date, "DD-MM-YYYY").toDate()
    });
  };
  handleChange = event => {
    this.setState({
      object: event.target.value
    });
  };

  dateChange = date => {
    this.setState({
      object: {
        date: moment(date).format("DD-MM-YYYY")
      },
      datePickerDate: date
    });
  };
  onHandleSubmit = event => {
    event.preventDefault();
  };

  handleDeleteClick = () => {
    return window.alert("Item will be deleted");
  };

  render() {
    return (
      <div>
        <h2 className="statusTitle">Welcome to status</h2>

        <div className="status-table">
          <button className="btn btn-primary" onClick={this.openModal}>
            Add new
          </button>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Activity</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <TableBody
              openModal={this.openModal}
              goBack={this.goBack}
              editIdState={this.state.editId}
              handleEditIdClick={this.handleEditIdClick}
              handleDeleteClick={this.handleDeleteClick}
            />
          </table>
          <div>
            <Modal
              visible={this.state.visibleModal}
              width="900"
              height="700"
              effect="fadeInUp"
              onClickAway={() => this.closeModal}
            >
              <PopUpModalContent
                state={this.state}
                handleInputChange={this.handleChange}
                dateChange={this.dateChange}
                onHandleSubmit={this.onHandleSubmit}
                closeModal={this.closeModal}
              />
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Status);
