import React, { Component } from "react";
import "./AddContact.css";

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    };
  }

  onChangeUserData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="Add-contact">
        <div className="Add-contact__form-wrapper">
          <form className="row">
            <div className="col">
              <div className="input-field">
                <input
                  id="first_name"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChangeUserData}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field">
                <input
                  id="last_name"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChangeUserData}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="input-field">
                <input
                  id="phone-number"
                  type="text"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.onChangeUserData}
                />
                <label htmlFor="phone-number">Phone number</label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button
            className="Add-contant__btn waves-effect waves-light btn green"
            onClick={() => this.props.onAddContact(this.state)}
          >
            {" "}
            Save
          </button>
          <button
            className="Add-contant__btn-close-form waves-effect waves-light btn red"
            onClick={() => this.props.toggleShowForm(this.state)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
