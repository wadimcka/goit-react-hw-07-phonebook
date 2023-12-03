import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';
import { deletContactThunk, fetchAllContactsThunk } from 'redux/operations';
import {
  Contact,
  DeleteContactBtn,
  ListOfContacts,
} from './ContactList.styled';

function ContactList() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  const handlDeleteContact = id => {
    dispatch(deletContactThunk({ id }));
  };

  const filteredContacts = contacts?.items?.filter(item =>
    item?.name?.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ListOfContacts>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <Contact key={id}>
            {name} : {number}
            <DeleteContactBtn
              type="button"
              onClick={() => handlDeleteContact(id)}
            >
              Delete
            </DeleteContactBtn>
          </Contact>
        ))}
    </ListOfContacts>
  );
}

export default ContactList;
