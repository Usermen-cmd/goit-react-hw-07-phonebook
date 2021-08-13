import { store } from 'redux/store';

export const getFiltredContacts = data => {
  if (data) {
    const filterString = store.getState().filter;
    console.log(filterString);
    return data.filter(el =>
      el.name.toLowerCase().includes(filterString.toLowerCase()),
    );
  }
  return [];
};
