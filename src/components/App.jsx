import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsFromStorage);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filterInputId = nanoid();

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = contactFormStates => {
    const { name, number } = contactFormStates;
    const newContact = { id: nanoid(), name, number };

    this.state.contacts.some(({ name: contactName }) => contactName === name)
      ? alert(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  handleDeleteContact = contactId =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => contactId !== id),
    }));

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.app}>
        <h1 className={css.appTitle}>Phonebook</h1>

        <ContactForm
          handleSubmit={this.handleSubmit}
          nameInputId={this.nameInputId}
          numberInputId={this.numberInputId}
        />

        <h2 className={css.title}>Contacts:</h2>

        <Filter
          filterInputId={this.filterInputId}
          handleChange={this.handleChange}
          filter={filter}
        />

        {!contacts.length ? (
          <p className={css.listEmpty}>The contact list is empty!</p>
        ) : (
          <ContactList
            contacts={contacts}
            filter={filter}
            handleDeleteContact={this.handleDeleteContact}
          />
        )}
      </div>
    );
  }
}

export { App };
