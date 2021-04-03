import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

import s from "./ContactList.module.css";

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>{name}: </p> <p>{number}</p>
          <button
            className={s.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

//функция фильтрации контактов
const filterContacts = (contacts, filter) => {
  const normFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normFilter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const filteredContacts = filterContacts(items, filter);
  return {
    contactList: filteredContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
