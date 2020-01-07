import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "sujilal",
        email: "sujilallalu@gmail.com",
        phone: "7348942266",
        type: "personal"
      },
      {
        id: 2,
        name: "Rithu",
        email: "rithu@gmail.com",
        phone: "7348942246",
        type: "professional"
      },
      {
        id: 3,
        name: "Lalu",
        email: "lalu@gmail.com",
        phone: "7348932266",
        type: "personal"
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // ADD CONTACTS
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  // DELETE CONTACTS
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  };
  // SET CURRENT CONTACTS
  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };
  // CLEAR CURRENT CONTACT
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };
  // UPDATE CONTACT
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };
  // FILTER CONTACT
  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    });
  };
  // CLEAR FILTER
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        filterContacts,
        clearFilter,
        deleteContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
