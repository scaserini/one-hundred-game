import React from 'react';
import { useStyles } from './Cell.styles';

const Cell = ({ cellContent, handleSetBoard, isAvailable, isCurrentNumber }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.cell}
      onClick={handleSetBoard}
      style={{
        background: isAvailable ? 'var(--light-brown)' : '',
        fontWeight: isCurrentNumber ? 'bold' : '',
      }}
    >
      {cellContent}
    </div>
  );
};

export default Cell;
