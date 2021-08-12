//Styles
import css from './ContactList.module.css';
//Utils
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/operations';
import { getFiltredContacts } from 'utils/getFiltredContacts';
import { GoTrashcan } from 'react-icons/go';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFiltredContacts);

  const hangleContactDelete = id => () => dispatch(delContact(id));

  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      <ul className={css.list}>
        {filteredContacts.map(el => {
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
    </>
  );
};

export default ContactList;
