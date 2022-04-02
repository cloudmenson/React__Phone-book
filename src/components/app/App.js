import React, { Component } from "react";
import PhoneBook from "../phone-book/PhoneBook";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <PhoneBook />
        </div>
      </div>
    );
  }
}
