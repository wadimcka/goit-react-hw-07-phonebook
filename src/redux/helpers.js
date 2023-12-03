export const handlePending = state => {
  state.isLoading = true;
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
  state.items = payload;
};
export const handleAddContactThunkFulfield = (state, { payload }) => {
  state.items.push(payload);
};
export const handleDeleteContactThunkFulfield = (state, { payload }) => {
  if (payload.id) {
    const index = state.items.findIndex(item => item.id === payload.id);
    state.items.splice(index, 1);
  }
};
