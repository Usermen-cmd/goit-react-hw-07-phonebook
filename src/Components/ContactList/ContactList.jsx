//Styles
import css from './ContactList.module.css';
//Utils
import { GoTrashcan } from 'react-icons/go';
import { getFiltredContacts } from 'utils/getFiltredContacts';
import {
  useGetContactByNameQuery,
  useDeleteContactMutation,
} from 'redux/contactApiServise';

const ContactList = () => {
  const { data } = useGetContactByNameQuery();
  const [deleteContact] = useDeleteContactMutation();

  const fitredContacts = getFiltredContacts(data);

  const hangleContactDelete = id => () => deleteContact(id);

  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      {fitredContacts && (
        <ul className={css.list}>
          {fitredContacts.map(el => {
            return (
              <li className={css.listItem} key={el.id}>
                <span>{el.name}</span>
                <span>{el.tel}</span>
                <button
                  className={css.button}
                  type="button"
                  onClick={hangleContactDelete(el.id)}
                >
                  delete
                  <GoTrashcan size="16" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
