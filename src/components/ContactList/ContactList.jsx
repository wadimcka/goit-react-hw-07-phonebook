import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectfiltredContacts, selectisLoading } from 'redux/selectors';
import { fetchAllContactsThunk } from 'redux/operations';
import { ListOfContacts } from './ContactList.styled';
import ContactItem from 'components/Contact/ContactItem';
import { Loader } from 'components/Loader/Loader';

function ContactList() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectisLoading);
  const filteredContacts = useSelector(selectfiltredContacts);

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  return (
    <ListOfContacts>
      {isLoading && <Loader />}
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
    </ListOfContacts>
  );
}

export default ContactList;
