import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }

  onHandleSubmit = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  onFilter = e => {
    const value = e.target.value.toLowerCase();
    this.setState({ filter: value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  onDeleting = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const getContacts = this.getContacts();
    const { filter } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onHandleSubmit={this.onHandleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.onFilter} />
        <ContactList contacts={getContacts} deleted={this.onDeleting} />
      </>
    );
  }
}

export default Phonebook;
