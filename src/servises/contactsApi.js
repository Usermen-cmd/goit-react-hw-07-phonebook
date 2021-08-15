const BASE_URL = 'https://60ae1fea80a61f00173327f3.mockapi.io/contacts';

export const getContacts = async () => {
  const promise = await fetch(BASE_URL);
  if (promise.status === 404) {
    throw new Error(promise.statusText);
  }
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
  if (promise.status === 404) {
    throw new Error(promise.statusText);
  }
  const data = await promise.json();
  return data;
};

export const deleteContact = async id => {
  const promise = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (promise.status === 404) {
    throw new Error(promise.statusText);
  }
  const data = await getContacts();
  return data;
};
