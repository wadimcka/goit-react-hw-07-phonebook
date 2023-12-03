import styled from 'styled-components';

export const ListOfContacts = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  };
});

export const Contact = styled('li')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 18,
  };
});

export const DeleteContactBtn = styled('button')(() => {
  return {
    borderRadius: 4,
    fontSize: 16,
    cursor: 'pointer',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(245, 52, 5, 0.63)',
      border: '2px solid transparent',
      boxShadow: '0px 0px 8px 5px rgba(0,0,0,0.35)',
    },
  };
});
