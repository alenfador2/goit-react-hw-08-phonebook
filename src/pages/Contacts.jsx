import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import React from 'react';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      <Helmet>Contacts</Helmet>
      {isLoading && <Loader />}
      <div className="main-div">
        {error && <Error />}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
export default Contacts;
