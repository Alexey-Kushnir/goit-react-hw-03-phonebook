import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactsInput } from './ContactsInput/ContactsInput';
import { ContactsStorage } from './ContactsStorage/ContactsStorage';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(8), name, number }, ...contacts],
    }));
    return true;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { addContact, changeFilter, getVisibleContacts, deleteContact } =
      this;
    const { contacts, filter } = this.state;

    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <ContactsInput onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 0 && (
            <>
              <Filter value={filter} onChange={changeFilter} />
              <ContactsStorage
                contactList={getVisibleContacts()}
                onDeleteContact={deleteContact}
              />
            </>
          )}
        </Section>
      </div>
    );
  }
}
