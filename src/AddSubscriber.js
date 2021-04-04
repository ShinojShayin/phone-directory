import React, { Component } from "react";
import Header from "./Header";
import "./common/common.css";
import "./AddSubscriber.css";
import { Link } from "react-router-dom";

class AddSubscriber extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: "",
    };
    console.log("constructor called");
  }

  inputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
  };

  componentDidMount() {
    console.log("componentDidMount called");
  }

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addSubscriberHandler(this.state);
    this.setState({
      id: 0,
      name: "",
      phone: "",
    });

    this.props.history.push("/");
  };

  render() {
    console.log("render called");
    const { name, phone } = this.state;
    return (
      <div>
        <Header heading="Add Subscriber"></Header>
        <div className="component-body-container">
          <Link to="/">
            <button className="custom-btn">back</button>
          </Link>

          <form
            className="subscriber-form"
            onSubmit={this.onFormSubmitted.bind(this)}
          >
            <label htmlFor="name" className="label-control">
              Name:{" "}
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="input-control"
              name="name"
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor="phone" className="label-control">
              Phone:{" "}
            </label>
            <br />
            <input
              id="phone"
              type="text"
              className="input-control"
              name="phone"
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />

            <div className="subscriber-info-container">
              <span className="subscriber-to-add-heading">
                Subscriber to be added:{" "}
              </span>
              <br />
              <span className="subscriber-info">Name: {name}</span>
              <br />
              <span className="subscriber-info">Phone: {phone}</span>
              <br />
            </div>

            <button type="submit" className="custom-btn add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSubscriber;
