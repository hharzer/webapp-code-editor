import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,    
  },
}));

export default useStyles;
