import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import {
  Container,
  InputName,
  InputValue,
  SubmitButton,
} from './ContactsInput.styled';

export class ContactsInput extends Component {
  nameInputId = nanoid(8);
  numberInputId = nanoid(8);

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.onSubmit(this.state)) {
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleSubmit, nameInputId, handleInputChange, numberInputId } =
      this;
    const { name, number } = this.state;

    return (
      <Container onSubmit={handleSubmit}>
        <InputName htmlFor={nameInputId}>Name</InputName>
        <InputValue
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
          id={nameInputId}
        />
        <InputName htmlFor={numberInputId}>Number</InputName>
        <InputValue
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
          id={numberInputId}
        />
        <SubmitButton type="submit">Ad contact</SubmitButton>
      </Container>
    );
  }
}

// ContactsInput.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
