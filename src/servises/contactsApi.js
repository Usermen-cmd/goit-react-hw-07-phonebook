const BASE_URL = 'http://localhost:5555/contacts';

export const getContacts = async () => {
  const promise = await fetch(BASE_URL);
  const data = await promise.json();
  return data;
};

export const postContact = async contact => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  };

  const promise = await fetch(BASE_URL, options);
  const data = await promise.json();
  return data;
};

export const deleteContact = async id => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  const data = await getContacts();
  return data;
};
