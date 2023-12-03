import axios from 'axios';

axios.defaults.baseURL = 'https://656b5633dac3630cf72801aa.mockapi.io/';

export const getContacts = async () => {
  const response = await axios.get('contacts');
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data;
};

export const getAddedContact = async contact => {
  const response = await axios.post('contacts', contact);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data;
};

export const getDeletedContact = async id => {
  const response = await axios.delete(`contacts/${id}`);
  const { data } = response;
  if (response.status < 200 || response.status >= 300) {
    throw new Error('Data failed to load. Status: ' + response.status);
  }
  return data;
};
