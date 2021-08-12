//Components
import { LinearProgress } from '@material-ui/core';
import AddContactForm from 'Components/AddContactForm/AddContactForm';
import ContactList from 'Components/ContactList/ContactList';
import FindForm from 'Components/FindForm/FindForm';
import { Toaster } from 'react-hot-toast';
//Styles
import css from './Phonebook.module.css';
//Utils
import { useSelector } from 'react-redux';

const Phonebook = () => {
  const isLoading = useSelector(s => s.isLoading);

  return (
    <div className={css.container}>
      <AddContactForm />
      <FindForm />
      {isLoading ? <LinearProgress /> : <ContactList />}
      <Toaster position="top-right" />
    </div>
  );
};

export default Phonebook;
