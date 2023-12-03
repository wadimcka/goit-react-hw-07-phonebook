import styled from 'styled-components';

export const FormContainer = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
  };
});

export const FormInputLabel = styled('label')(() => {
  return {
    fontSize: 18,
    marginBottom: 8,
  };
});

export const FormInput = styled('input')(() => {
  return {
    marginBottom: 10,
    fontSize: 16,
    padding: '4px 6px',
    borderRadius: 4,
    border: ' 0.7px solid',
    boxShadow: '0px 0px 8px 5px rgba(0,0,0,0.35)',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(236, 236, 236, 0.8)',
      boxShadow: '10px 9px 22px -9px rgba(109, 114, 109, 0.63)',
    },
  };
});

export const FormBtn = styled('button')(() => {
  return {
    width: 200,
    padding: 6,
    margin: '0 auto',
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 4,
    fontSize: 16,
    cursor: 'pointer',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(45, 230, 27, 0.63)',
      border: '2px solid transparent',
      boxShadow: '0px 0px 8px 5px rgba(0,0,0,0.35)',
    },
  };
});
