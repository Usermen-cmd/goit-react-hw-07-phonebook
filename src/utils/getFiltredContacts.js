export const getFiltredContacts = state => {
  return state.contacts.filter(el =>
    el.name.toLowerCase().includes(state.filter.toLowerCase()),
  );
};
