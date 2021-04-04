import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";

class App extends Component {
  deleteHandler(msg) {
    alert(msg);
  }

  render() {
    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "88888888888888",
      },
      {
        id: 2,
        name: "Srishti Gupta",
        phone: "999999999",
      },
    ];

    return (
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {subscribers.map((sub) => {
            return (
              <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button
                    className="custom-btn delete-btn"
                    onClick={this.deleteHandler.bind(this, "Kaise ho")}
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

export default App;
