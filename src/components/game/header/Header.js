import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import Brightness2TwoToneIcon from '@material-ui/icons/Brightness2TwoTone';
import { useStyles } from './Header.styles';

import { ThemeContext } from '../../../context/ThemeContext';

const Header = ({ username, bestScore }) => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <div className={`${classes.container} ${theme === 'dark' && classes.dark}`}>
      <span className={classes.headerItem}>
        <PersonOutlineTwoToneIcon /> {username}
      </span>
      <span className={classes.headerItem}>
        <StarTwoToneIcon /> {bestScore}
      </span>
      <span className={classes.rightMenu}>
        <span onClick={toggleTheme} className={classes.themeIcon}>
          {theme === 'dark' ? <WbSunnyTwoToneIcon /> : <Brightness2TwoToneIcon />}
        </span>
        <span>
          <Link to="/about">
            <HelpTwoToneIcon />
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Header;
