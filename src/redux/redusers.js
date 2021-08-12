import { changeFilter } from 'redux/actions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { setContacts, addContact, delContact } from 'redux/operations';

const initState = {
  contacts: [],
  filter: '',
  isLoading: false,
};

const contacts = createReducer(initState.contacts, {
  [setContacts.fulfilled]: (_, action) => [...action.payload],
  [addContact.fulfilled]: (state, action) => {
    state.push(action.payload);
  },
  [delContact.fulfilled]: (_, action) => [...action.payload],
});

const filter = createReducer(initState.filter, {
  [changeFilter]: (_, action) => action.payload,
});

const isLoading = createReducer(initState.isLoading, {
  [setContacts.pending]: () => true,
  [setContacts.fulfilled]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
});

export const rootReducer = combineReducers({
  contacts,
  filter,
  isLoading,
});
