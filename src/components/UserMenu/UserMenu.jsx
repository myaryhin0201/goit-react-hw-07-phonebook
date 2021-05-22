import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/default-avatar.png';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: '12px',
  },
});

const { getUserEmail } = authSelectors;
const { getUserName } = authSelectors;

const UserMenu = ({ email, name, avatar, onLogout }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={avatar} alt="avatar" width="40" className={classes.avatar} />
      <span className={classes.name}>
        Welcome, {name}
        {/* {email} */}
      </span>
      <button
        className="Navlink--active Navlink"
        type="button"
        onClick={onLogout}
      >
        Log Out
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  email: getUserEmail(state),
  name: getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
