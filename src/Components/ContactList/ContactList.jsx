//Styles
import css from './ContactList.module.css';
//Components
import { LinearProgress } from '@material-ui/core';
import { ContactListItem } from 'Components/ContactListItem/ContactListItem';
//Utils
// import { GoTrashcan } from 'react-icons/go';
import { getFiltredContacts } from 'utils/getFiltredContacts';
import { useSelector } from 'react-redux';
import {
  useGetContactQuery,
  useDeleteContactMutation,
} from 'redux/contactApiServise';

const ContactList = () => {
  console.log(useDeleteContactMutation());
  const { data, isFetching } = useGetContactQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const filterValue = useSelector(s => s.filter);

  const fitredContacts = getFiltredContacts(data, filterValue);

  const hangleContactDelete = id => () => deleteContact(id);

  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      {isFetching && <LinearProgress style={{ marginTop: '20px' }} />}
      <ul className={css.list}>
        {fitredContacts.map(el => {
          return (
            <ContactListItem
              data={el}
              hangleContactDelete={hangleContactDelete}
              isLoading={isLoading}
              key={el.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
