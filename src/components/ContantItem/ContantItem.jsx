import PropTypes from 'prop-types';
import useStyles from './ContantItemStyles';
const ContanctItem = ({ id, name, number, onDeleteContact }) => {
  const classes = useStyles();
  return (
    <li className={classes.ContactItem}>
      <p className={classes.ContactName}>{name}</p>
      <p className={classes.ContactNumber}>{number}</p>
      <button
        className="btn float-right login_btn"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
ContanctItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContanctItem;
