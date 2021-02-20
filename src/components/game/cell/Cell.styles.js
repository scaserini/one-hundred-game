import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  cell: {
    alignItems: 'center',
    border: '1px solid var(--black)',
    display: 'flex',
    fontSize: '5.65vmin',
    fontWeight: '500',
    justifyContent: 'center',
  },

  '@media (min-width: 600px)': {
    cell: {
      border: '2px solid var(--black)',
      fontSize: 'min(4.5vmin, 1.9rem)',
    },
  },
});
