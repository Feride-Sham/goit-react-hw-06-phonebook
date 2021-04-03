import React, { Component } from "react";
import { v4 as id } from "uuid";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  // перезаписывает массив контактов и
  // запрещает сохранить уже существующий контакт
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
