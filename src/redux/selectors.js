// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;
export const selectisLoading = state => state.contacts.isLoading;

// export const selectFiltredContacts = createSelector([selectFilter]);
