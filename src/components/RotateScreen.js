import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    backgroundColor: 'var(--light-black)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  text: {
    color: 'white',
  },
});

const RotateScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p className={classes.text}>rotate your device</p>
    </div>
  );
};

export default RotateScreen;
