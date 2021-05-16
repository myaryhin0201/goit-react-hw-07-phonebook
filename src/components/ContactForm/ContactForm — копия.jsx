import { useState } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import useStyles from './ContactFormStyles';
const initialState = {
  name: '',
  number: '',
};
const ContactForm = ({ contacts, onSubmit }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(initialState);
  const { name, number } = inputValue;
  const handleSubmit = e => {
    e.preventDefault();
    const hasEmptyField = Object.values(inputValue).some(item => !item);
    if (hasEmptyField) {
      return;
    }
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      e.currentTarget.reset();
      return;
    }
    onSubmit(name, number);
    setInputValue(initialState);
    e.currentTarget.reset();
  };

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    setInputValue({ ...inputValue, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.Phonebook}>
      <label className={classes.PhonebookInput}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          autoFocus
          placeholder="Enter your name"
          onChange={changeInput}
        />
      </label>
      <label className={classes.PhonebookInput}>
        <span>Phone</span>
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          placeholder="Enter your phone number"
          onChange={changeInput}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => {
    dispatch(contactsActions.addContact(name, number));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
