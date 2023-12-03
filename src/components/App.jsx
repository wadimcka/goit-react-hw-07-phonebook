import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
