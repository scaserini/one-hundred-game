import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  signinForm: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',

    '& form': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '420px',
      width: 'calc(78vw)',
    },

    '& button': {
      marginTop: '15px',
    },
  },
});
