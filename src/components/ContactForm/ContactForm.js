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
    const { number, name } = this.state;
    const { contacts } = this.props;

    if (Number.isNaN(+number)) {
      alert("Извините, номер телефона может содержать только цифры ");
      return;
    }

    const uniqueContact = contacts.find((item) => item.name === name);
    if (uniqueContact) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }

    if (name === "" || number === "") {
      alert("Необходимо заполнить имя и телефон контакта");
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

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
