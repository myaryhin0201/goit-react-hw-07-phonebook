import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  ContactItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  ContactButton: {
    border: ' 2px solid rgba(255,255,255,0.27)',
    borderRadius: '0px 10px 0px 10px',
    backgroundColor: 'purple',
    color: 'white',
    '&:hover, &:focus': {
      '.ContactItem': {
        backgroundColor: 'black',
      },
      backgroundColor: 'black',
    },
  },
});
export default useStyles;
