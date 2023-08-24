import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';

import useStyles from './useStyles';

export const Loading = _ => {
  const classes = useStyles();

  return <Paper elevation={0} square={true} className={classes.preloader}>
    <CircularProgress size={50} />
  </Paper>;
};

Loading.propTypes = {
  // interesting times; there are components not using any prop...
};

export default Loading;
