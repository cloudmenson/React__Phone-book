import React, { Component } from "react";
import "./PhoneBook.css";
import Chamomile from "../../assets/chamomile.png";
import ContactsList from "./contacts-list/ContactsList";

export default class PhoneBook extends Component {
  render() {
    return (
      <div className="Phone-book">
        <div className="Phone-book__head-wrapper">
          <h1>Phone book</h1>
          <img className="Phone-book__chamomile-img" src={Chamomile} alt="img"></img>
        </div>
        <ContactsList />
      </div>
    );
  }
}
