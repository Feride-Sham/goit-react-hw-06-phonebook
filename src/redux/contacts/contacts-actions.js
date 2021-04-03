import { v4 as id } from "uuid";
import types from "./contacts-types";
id();

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: id(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
