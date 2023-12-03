import React from 'react';
import { useDispatch } from 'react-redux';
import { deletContactThunk } from 'redux/operations';
import {
  Contact,
  DeleteContactBtn,
  SpanName,
  Spanphone,
} from './ContactItem.styled';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handlDeleteContact = id => {
    dispatch(deletContactThunk(id));
  };

  return (
    <div>
      <Contact>
        <SpanName>{name}</SpanName> : <Spanphone>{phone}</Spanphone>
        <DeleteContactBtn type="button" onClick={() => handlDeleteContact(id)}>
          Delete
        </DeleteContactBtn>
      </Contact>
    </div>
  );
};

export default ContactItem;
