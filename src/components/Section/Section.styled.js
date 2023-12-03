import styled from 'styled-components';

export const SectionContainer = styled('section')(() => {
  return {
    width: 400,
    padding: '10px 40px',
    margin: '0 auto',
  };
});

export const SectionTitle = styled('h1')(() => {
  return {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 40,
  };
});
