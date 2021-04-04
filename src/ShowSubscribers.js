import React, { Component } from "react";

import "./ShowSubscribers.css";
import "./common/common.css";
import Header from "./Header.js";
import { Link } from "react-router-dom";

class ShowSubscribers extends Component {
  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  };

  render() {
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Shilpa Bhat",
    //     phone: "88888888888888",
    //   },
    //   {
    //     id: 2,
    //     name: "Srishti Gupta",
    //     phone: "999999999",
    //   },
    // ];

    return (
      <div>
        <Header />
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.props.subscribersList.map((sub) => {
            return (
              <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button
                    className="custom-btn delete-btn"
                    onClick={this.onDeletedClick.bind(this, sub.id)}
                  >
                    Delete
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
