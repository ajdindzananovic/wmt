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
      visible: false,
      object: {},
      datum: ""
    };
  }

  openModal = () => {
    this.setState({
      visible: true
    });
  };

  closeModal = () => {
    this.setState({
      visible: false
    });
  };

  goBack = () => {
    this.setState({
      visible: false
    });
  };

  handleEditIdClick = item => {
    this.setState({
      object: item
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
        date: moment(date).format("YYYY-MM-DD")
      }
    });
  };
  onHandleSubmit = event => {
    event.preventDefault();
    console.log(moment(this.state.object.date).format("DD-MM-YYYY"));
    this.setState({
      datum: moment(this.state.object.date).format("DD-MM-YYYY")
    });
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
              visible={this.state.visible}
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
