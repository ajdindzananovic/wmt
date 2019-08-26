import React, { Component, Fragment } from "react";
import statusData from "../../fakeData";

export default class status_table_body extends Component {
  handleEditClick = item => {
    this.props.handleEditIdClick(item);
    this.props.openModal();
  };
  render() {
    return (
      <Fragment>
        {statusData.map(item => {
          return (
            <tbody>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.activity}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => this.handleEditClick(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.props.handleDeleteClick(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Fragment>
    );
  }
}
