import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Filter: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: '20px',
    fontSize: '20px',
    width: '500px',
    '& input': {
      minWidth: '225px',
      border: 'none',
      borderRadius: '10px',
      paddingLeft: '15px',
      fontSize: '15px',
      '&:hover, &:focus': {
        outline: 'none',
      },
    },
  },
});
export default useStyles;
