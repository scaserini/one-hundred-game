import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: {
    marginBottom: '15px',
    marginTop: '15px',
    maxWidth: '100%',
  },

  dialog: {
    '& .MuiPaper-root': {
      margin: '11px',
    },
  },

  dialogContent: {
    backgroundColor: 'var(--black)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    textAlign: 'center',
  },

  text: {
    color: 'var(--light-gray)',

    '& span': {
      color: 'var(--light-brown)',
      fontWeight: 'bold',
    },
  },

  '@media (max-width: 767px)': {
    text: {
      fontSize: '1.3rem',
    },
  },

  button: {
    marginTop: '15px',
  },

  loader: {
    animation: 'loader 1s infinite',
    border: '2px solid var(--light-gray)',
    borderRadius: '50%',
    borderTopColor: 'transparent',
    height: '1rem',
    margin: '15px auto',
    width: '1rem',
  },
});

export default function AlertDialog({ open, handleClose, score }) {
  const [finalScore, setFinalScore] = useState();
  const [image, setImage] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (score > 0) {
      setFinalScore(score);
      // pick the image associated with the final score.
      let result = Math.floor(score / 10) * 10;
      import(`../../img/scores/${result}.jpg`).then((image) => {
        setImage(image.default);
      });
    }
  }, [score]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.dialog}
    >
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h5" className={classes.text}>
          You've reached <span>{finalScore}</span>
        </Typography>
        {image === null ? (
          <div className={classes.loader}></div>
        ) : (
          <div>
            <img className={classes.image} src={image} alt="scores" />
          </div>
        )}
        <Button variant="contained" onClick={handleClose}>
          Play
        </Button>
      </DialogContent>
    </Dialog>
  );
}
