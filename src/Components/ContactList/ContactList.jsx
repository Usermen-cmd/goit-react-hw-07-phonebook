//Styles
import css from './ContactList.module.css';
//Components
import { LinearProgress } from '@material-ui/core';
//Utils
import { GoTrashcan } from 'react-icons/go';
import { getFiltredContacts } from 'utils/getFiltredContacts';
import { useSelector } from 'react-redux';
import {
  useGetContactQuery,
  useDeleteContactMutation,
} from 'redux/contactApiServise';

const ContactList = () => {
  const { data, isFetching, isSuccess } = useGetContactQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector(s => s.filter);

  const fitredContacts = getFiltredContacts(data, filterValue);

  const hangleContactDelete = id => () => deleteContact(id);

  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      {isFetching && <LinearProgress style={{ marginTop: '20px' }} />}
      {isSuccess && (
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
                  disabled={isFetching}
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
