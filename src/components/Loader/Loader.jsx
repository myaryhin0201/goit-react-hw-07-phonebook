import Spinner from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
  },
});

const Loader = () => {
  const classes = useStyles();
  return (
    <Spinner
      className={classes.spinner}
      type="Puff"
      color="orange"
      height={100}
      width={100}
    />
  );
};

export default Loader;
