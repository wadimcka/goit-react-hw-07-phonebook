import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAddedContact, getContacts, getDeletedContact } from 'api/api';

export const fetchAllContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const responce = await getContacts();
      toast.success(
        `There are ${responce.length} entries in your contact list !`
      );
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const responce = await getAddedContact(contact);
      toast.success(`You have added a contact ${responce.name}!`);
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletContactThunk = createAsyncThunk(
  'contacts/deletContact',
  async (id, thunkAPI) => {
    try {
      const responce = await getDeletedContact(id);
      toast.error(`You have deleted a contact ${responce.name}!`);
      return responce;
    } catch (error) {
      toast.warn(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
