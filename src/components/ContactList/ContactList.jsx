import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter, selectisLoading } from 'redux/selectors';
import { fetchAllContactsThunk } from 'redux/operations';
import { ListOfContacts } from './ContactList.styled';
import ContactItem from 'components/Contact/ContactItem';
import { Loader } from 'components/Loader/Loader';

function ContactList() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectisLoading);

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

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
