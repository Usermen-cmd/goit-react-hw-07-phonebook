//Styles
import css from './AddContactForm.module.css';
//Components
import { Formik, Form, Field } from 'formik';
//Utils
import { useEffect } from 'react';
import { addContact, setContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { debounce } from 'throttle-debounce';
import { hasName } from 'utils/hasName';
import { schema } from 'utils/validtionSchema';

const AddContactForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setContacts());
  }, [dispatch]);

  const onError = debounce(300, error => {
    toast.error(error);
  });

  function onSubmit(event, actions) {
    if (hasName(event.name)) {
      toast.error('Такой контакт уже есть');
    } else {
      dispatch(
        addContact({
          ...event,
        }),
      );
      toast.success('Добавлено');
    }
    actions.resetForm();
    return;
  }

  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          tel: '',
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field
              className={css.input}
              id="name"
              name="name"
              placeholder="Enter name"
            />
            {touched.name && errors.name && onError(errors.name)}

            <label className={css.label} htmlFor="tel">
              Phone
            </label>
            <Field
              className={css.input}
              id="tel"
              name="tel"
              placeholder="Enter phone number"
            />
            {touched.tel && errors.tel && onError(errors.tel)}

            <button className={css.button} type="submit">
              add
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddContactForm;
