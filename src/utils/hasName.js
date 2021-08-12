import { store } from 'redux/store';

export const hasName = name => {
  const contacts = store.getState().contacts;
  const contactNames = contacts.map(el => el.name);
  return contactNames.includes(name);
};
