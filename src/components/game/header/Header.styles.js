import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  headerItem: {
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginRight: '1.375rem',

    '@media(min-width: 768px)': {
      fontSize: '1.25rem',
    },

    '& svg': {
      color: 'var(--black)',
      marginRight: '0.25rem',
    },
  },

  container: {
    display: 'flex',
    paddingBottom: '0.625rem',

    '& svg': {
      fontSize: '2.05rem',

      '@media(min-width: 768px)': {
        fontSize: '2.3rem',
      },
    },
  },

  themeIcon: {
    cursor: 'pointer',
    marginRight: '0.8rem',
  },

  rightMenu: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',

    '& svg': {
      color: 'var(--black)',
      position: 'relative',
      top: '0.15rem',
    },
  },

  dark: {
    '& svg': {
      color: 'var(--light-gray)',
    },
  },
});
