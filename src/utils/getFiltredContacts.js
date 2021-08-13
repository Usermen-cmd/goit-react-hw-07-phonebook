export const getFiltredContacts = (contact, string) => {
  if (contact) {
    return contact.filter(el =>
      el.name.toLowerCase().includes(string.toLowerCase()),
    );
  }
  return [];
};
