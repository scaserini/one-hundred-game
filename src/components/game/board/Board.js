import React, { useState, useEffect } from 'react';

import { useStyles } from './Board.styles';

import Cell from '../cell/Cell';
import AlertDialog from '../AlertDialog';

import { getAvailablePositions } from './Board.helpers';
import { initialBoard } from './Board.constants';

const Board = ({ handleBestScore }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [availablePositions, setAvailablePositions] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const classes = useStyles();

  function handleSetBoard(index) {
    if (board[index] === '' && isAvailable(index)) {
      board[index] = currentNumber;
      setCurrentNumber((prevNumber) => prevNumber + 1);
    }
  }

  function isAvailable(index) {
    return availablePositions.indexOf(index) !== -1;
  }

  function resetGame() {
    setCurrentNumber(1);
    setBoard((prevBoard) => prevBoard.map((_) => ''));
  }

  useEffect(() => {
    let positions = getAvailablePositions(board, currentNumber - 1);
    setAvailablePositions(positions);
    if (positions.length === 0) {
      setTimeout(() => {
        setIsDialogOpen(true);
      }, 1200);
      handleBestScore(currentNumber - 1);
    }
    // eslint-disable-next-line
  }, [currentNumber]);

  useEffect(() => {
    if (!isDialogOpen) {
      resetGame();
    }
  }, [isDialogOpen]);

  return (
    <>
      <div className={classes.board}>
        {board.map((cell, i) => (
          <Cell
            key={i}
            cellContent={cell}
            handleSetBoard={() => handleSetBoard(i)}
            isAvailable={isAvailable(i)}
            // eslint-disable-next-line
            isCurrentNumber={currentNumber - 1 == cell}
          />
        ))}
      </div>
      {isDialogOpen && (
        <AlertDialog
          open={isDialogOpen}
          handleClose={() => setIsDialogOpen(false)}
          score={currentNumber - 1}
        />
      )}
    </>
  );
};

export default Board;
