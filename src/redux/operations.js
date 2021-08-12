import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from 'servises/contactsApi';

const setContacts = createAsyncThunk('fetchContacts', getContacts);
const addContact = createAsyncThunk('addContact', postContact);
const delContact = createAsyncThunk('deleteContact', deleteContact);

export { setContacts, addContact, delContact };
