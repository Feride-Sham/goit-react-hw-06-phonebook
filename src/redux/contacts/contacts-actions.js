import { v4 as id } from "uuid";
import { createAction } from "@reduxjs/toolkit";
import types from "./contacts-types";
id();

//  ****before
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: id(),
//     name,
//     number,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

//  ****after
const addContact = createAction(types.ADD, ({ name, number }) => ({
  payload: {
    id: id(),
    name,
    number,
  },
}));

const deleteContact = createAction(types.DELETE);

const changeFilter = createAction(types.CHANGE_FILTER);

export default { addContact, deleteContact, changeFilter };
