import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts/';
import useStyles from './FilterStyles';
const Filter = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <label className={classes.Filter}>
      <span> Find contact by name</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
Filter.defaultProps = {
  value: '',
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
