import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  Phonebook: {
    width: '450px',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '10px 10px',
    '& button': {
      border: ' 2px solid rgba(136,31,136,0.87)',
      borderRadius: '20px 0px 20px 0px',
      backgroundColor: 'white',
      padding: '5px 30px',
      '&:hover, &:focus': {
        backgroundColor: 'indigo',
        borderColor: 'indigo',
        color: 'white',
        outline: 'none ',
      },
    },
  },
  PhonebookInput: {
    display: 'flex',
    width: '215px',
    flexDirection: 'column',
    marginBottom: '20px',
    '& span': {
      marginBottom: '10px',
      fontSize: '20px',
    },
    '& input': {
      minWidth: '225px',
      border: 'none',
      borderRadius: '10px',
      padding: '5px 15px',
      fontSize: '15px',
      '&:hover, &:focus': {
        outline: 'none',
      },
    },
  },
});

export default useStyles;
