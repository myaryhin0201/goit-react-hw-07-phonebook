import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ContactItem: {
    display: 'flex',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '5px',
    padding: '10px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:not(:last-child)': {
      marginBottom: '10px',
    },
  },
  ContactName: {
    minWidth: '150px',
  },
  ContactNumber: {
    width: '125px',
  },
});
export default useStyles;
