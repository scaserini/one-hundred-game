import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  board: {
    cursor: 'pointer',
    display: 'grid',
    gridTemplateColumns: 'repeat(10,1fr)',
    gridTemplateRows: 'repeat(10,1fr)',
    height: '90vmin',
    margin: '0 auto',
    maxHeight: '584px',
    maxWidth: '584px',
    outline: '2px solid var(--black)',
    position: 'absolute',
    top: '50%',
    right: '8px',
    bottom: '0',
    left: '8px',
    transform: 'translateY(-50%)',
    width: '90vmin',
  },

  '@media(max-width: 600px)': {
    board: {
      height: 'calc(100vmin - 16px)',
      width: 'calc(100vmin - 16px)',
    },
  },
});
