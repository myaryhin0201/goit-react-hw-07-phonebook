import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts/';
import PropTypes from 'prop-types';
import ContactItem from '../ContantItem';
const useStyles = createUseStyles({
  ContactsList: {
    padding: '20px',
    width: '450px',
    border: '2px solid black',
    borderRadius: '10px',
    marginBottom: '20px',
  },
});

const ContactsList = ({ contacts, onDeleteContact }) => {
  const classes = useStyles();

  return (
    <ul className={classes.ContactsList}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))
      ) : (
        <p>This contact is not in the list</p>
      )}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
