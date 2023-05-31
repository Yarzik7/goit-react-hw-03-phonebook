import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = event => {
    event.preventDefault();
    const { handleSubmit } = this.props;
    handleSubmit(this.state);
    this.reset();
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
          onChange={this.handleChange}
          value={name}
        />

        <label htmlFor={this.numberInputId} className={css.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          id={this.numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
          onChange={this.handleChange}
          value={number}
        />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.protoTypes = {
  nameInputId: PropTypes.string.isRequired,
  numberInputId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
