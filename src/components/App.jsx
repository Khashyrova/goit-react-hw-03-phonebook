import { Component } from 'react';

import ContactForm from './ContacttForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class Appa extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const json = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', json);
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('contacts');
      const contacts = JSON.parse(json);

      if (contacts) {
        this.setState(() => ({ contacts: contacts }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  handleAddContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleCheckUnique = name => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert(`${name} is already in contacts`);

    return !isExistContact;
  };

  handleremoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUnique}
        />
        <ContactList
          contacts={visibleContacts}
          onRemove={this.handleremoveContact}
        >
          <Filter filter={filter} onChange={this.handleFilterChange} />
        </ContactList>
      </>
    );
  }
}
