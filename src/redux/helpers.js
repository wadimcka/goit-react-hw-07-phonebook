export const handlePending = state => {
  state.contacts.isLoading = true;
};
export const handlRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleFetchAllContactsThunkFulfield = (state, { payload }) => {
  // console.log('Handling fetchAllContacts fulfilled:', { payload });
  // console.log('Current state:', state);
  state.items = payload;
};
export const handleAddContactThunkFulfield = (state, { payload }) => {
  state.items.push(payload);
};
export const handleDeleteContactThunkFulfield = (state, { payload }) => {
  const idx = (state.items = state.items.findIndex(
    items => items.id === payload.id
  ));
  state.items.splice(idx, 1);
};
