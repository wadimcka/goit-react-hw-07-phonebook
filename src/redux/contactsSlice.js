import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContactsThunk,
  addContactThunk,
  deletContactThunk,
} from './operations';
import {
  handlRejected,
  handleAddContactThunkFulfield,
  handleDeleteContactThunkFulfield,
  handleFetchAllContactsThunkFulfield,
  handleFulfilled,
  handlePending,
} from './helpers';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(
        fetchAllContactsThunk.fulfilled,
        handleFetchAllContactsThunkFulfield
      )
      .addCase(addContactThunk.fulfilled, handleAddContactThunkFulfield)
      .addCase(deletContactThunk.fulfilled, handleDeleteContactThunkFulfield)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handlRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,

//   extraReducers: {
//     [fetchAllContactsOperation.pending](state, action) {
//       state.isLoading = true;
//     },
//     [fetchAllContactsOperation.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error(null);
//       state.items = action.payload;
//     },
//     [fetchAllContactsOperation.rejected](state, action) {
//       state.error(action.payload);
//       state.isLoading = false;
//     },

//     [addContactOperation.pending](state, action) {
//       state.isLoading = true;
//     },
//     [addContactOperation.fulfilled](state, action) {
//       state.items.push(action.payload);
//       state.isLoading = false;
//       state.error(null);
//     },
//     [addContactOperation.rejected](state, action) {
//       state.error(action.payload);
//       state.isLoading = false;
//     },

//     [deletContactOperation.pending](state, action) {
//       state.isLoading = true;
//     },
//     [deletContactOperation.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splise(index, 1);
//     },
//     [deletContactOperation.rejected](state, action) {
//       state.error(action.payload);
//       state.isLoading = false;
//     },
//   },
// });
