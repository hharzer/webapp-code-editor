import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ResetIcon from '@mui/icons-material/Refresh';

import { resetApp } from 'utils';
import config from 'config';

import useStyles from './useStyles';

const ErrorBoundaryFallback = _ => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          {config.messages.errorBoundary.somethingWentWrong}
        </Typography>
        <div className={classes.buttons}>
          <div>
            <Button target="_blank" rel="noreferrer" href={config.links.github}>
              {config.messages.errorBoundary.openIssue}
              <img src={config.urls.octocatIcon} alt="github icon"/>
            </Button>
          </div>
          <Typography component="h6">or</Typography>
          <div>
            <Button onClick={resetApp}>{config.messages.errorBoundary.resetApp} <ResetIcon /></Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ErrorBoundaryFallback;
