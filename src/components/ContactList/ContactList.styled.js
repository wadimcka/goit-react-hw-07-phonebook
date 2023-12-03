import styled from 'styled-components';

export const ListOfContacts = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    padding: 0,
  };
});
