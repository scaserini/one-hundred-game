import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import RotateScreen from '../RotateScreen';
import useViewportOrientation from '../../hooks/useViewportOrientation';
import { useStyles } from './Game.styles';
import { ThemeContext } from '../../context/ThemeContext';

const Game = ({ bestScore, children }) => {
  const isLandscape = useViewportOrientation();
  const [theme] = useContext(ThemeContext);
  const classes = useStyles();

  if (bestScore === null) {
    return <Redirect to="/about" />;
  }

  return (
    <>
      {isLandscape ? (
        <RotateScreen />
      ) : (
        <div className={`${classes.gameContainer} ${theme}`}>{children}</div>
      )}
    </>
  );
};

export default Game;
