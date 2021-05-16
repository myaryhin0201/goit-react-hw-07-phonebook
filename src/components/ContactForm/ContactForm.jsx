import { useState } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts/';
import PropTypes from 'prop-types';
import useStyles from './ContactFormStyles';
const initialState = {
  name: '',
  number: '',
};
const ContactForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(initialState);

  const { name, number } = inputValue;
  const handleSubmit = e => {
    e.preventDefault();
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
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => {
    dispatch(contactsOperations.addContact(name, number));
  },
});

export default connect(null, mapDispatchToProps)(ContactForm);
