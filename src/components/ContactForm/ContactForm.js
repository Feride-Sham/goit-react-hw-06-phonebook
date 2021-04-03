import React, { Component } from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // записывает данные введенные в форме
  handleInputChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  // отправляет данные введеные в форме
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { number } = this.state;
    if (Number.isNaN(+number)) {
      alert("Sorry! Phone number must contain only numbers ");
      return;
    }
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  // очищает форму после отправки
  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.container} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={s.label}>
          Phone
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={s.btnSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsActions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
