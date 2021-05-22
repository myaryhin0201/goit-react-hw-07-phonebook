import { useState } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts/';
import PropTypes from 'prop-types';
const initialState = {
  name: '',
  number: '',
};
const ContactForm = ({ onSubmit }) => {
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
    <div className="d-flex justify-content-center h-100 PHONEBOOK">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <label>
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  autoFocus
                  placeholder="Enter name"
                  onChange={changeInput}
                  className="form-control"
                />
              </label>
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-phone"></i>
                </span>
              </div>
              <label>
                <input
                  type="tel"
                  name="number"
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                  placeholder="Enter phone number"
                  onChange={changeInput}
                  className="form-control"
                />
              </label>
            </div>

            <div className="form-group">
              <button
                type="submit"
                value="addContact"
                className="btn float-right login_btn"
              >
                Add Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
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
