import React, { Component } from "react";
import "./AddContact.css";

export default class AddContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  onChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  onChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  onChangePhoneNumber = (e) => {
    this.setState({ phoneNumber: e.target.value });
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
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field">
                <input
                  id="last_name"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.onChangeLastName}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="input-field">
                <input
                  id="phone-number"
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.onChangePhoneNumber}
                />
                <label htmlFor="phone-number">Phone number</label>
              </div>
            </div>
          </form>
        </div>
        <button
          className="Add-contant__btn waves-effect waves-light btn green"
          onClick={() => this.props.onAddContact(this.state)}
        > Save
        </button>
      </div>
    );
  }
}
