import React from "react";
import "./ContactsList.css";
import AddContact from "../add-contact/AddContact";
// import ShowBtnAddForm from "../show-btn-add-form/Show-btn-add-form";

const Contact = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.phoneNumber}</td>
        <td>
          <button
            className="waves-effect waves-light btn red"
            onClick={() => {
              props.onDeleteContact(props.index);
            }}
          >
            <i className="large material-icons">clear</i>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.props = { isFormFormShow: true };
    this.toggleShowForm = this.toggleShowForm.bind(this);
  }

  state = {
    usersList: [],
  };

  componentDidUpdate() {
    localStorage.setItem("user-item", JSON.stringify(this.state.usersList));
  }

  componentDidMount() {
    const localStorageRef =
      localStorage.getItem("user-item") || JSON.stringify(this.state.usersList);
    this.setState({ usersList: JSON.parse(localStorageRef) });
  }

  toggleShowForm() {
    this.setState((prevState) => ({
      isFormFormShow: !prevState.isFormFormShow,
    }));
  }

  onAddContact = (userData) => {
    const newUser = userData;
    const { usersList } = this.state;
    usersList.push(newUser);
    this.setState(usersList);
    this.toggleShowForm();
  };

  onDeleteContact = (index) => {
    const { usersList } = this.state;
    usersList.splice(index, 1);
    this.setState({ usersList });
  };

  render() {
    return (
      <div className="Contacts-list">
        <div className="Contacts-list__contact">
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Phone number</th>
                <th>Delete</th>
              </tr>
            </thead>
            {this.state.usersList.map((user, index) => {
              return (
                <Contact
                  user={user}
                  index={index}
                  onDeleteContact={this.onDeleteContact}
                />
              );
            })}
          </table>
        </div>
        <button
          onClick={this.toggleShowForm}
          className="Add-contact__btn-open-form waves-effect waves-light btn green"
        >
          Add contact
        </button>
        {this.state.isFormFormShow ? (
          <AddContact
            onAddContact={this.onAddContact}
            toggleShowForm={this.toggleShowForm}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default ContactsList;
