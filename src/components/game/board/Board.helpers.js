import { numberOfCells, initialAvailablePositions } from './Board.constants';

export const getAvailablePositions = (board, current) => {
  // empty board
  if (current === 0) {
    // the number can be entered in any position
    return initialAvailablePositions;
  } else {
    // find the last entered number in the board
    let currentIndex = board.indexOf(current);
    let results = [];

    // three cells up
    if (currentIndex / numberOfCells > 2) {
      results.push(currentIndex - numberOfCells * 3);
    }

    // three cells down
    if (currentIndex / numberOfCells < numberOfCells - 3) {
      results.push(currentIndex + numberOfCells * 3);
    }

    if (currentIndex % numberOfCells > 2) {
      // three cells left
      results.push(currentIndex - 3);
    }
    if (currentIndex % numberOfCells >= 2) {
      if (currentIndex / numberOfCells > 1) {
        // 2 cells up, 2 cells left
        results.push(currentIndex - 2 - numberOfCells * 2);
      }
      if (currentIndex / numberOfCells < numberOfCells - 2) {
        // 2 cells down, 2 cells left
        results.push(currentIndex - 2 + numberOfCells * 2);
      }
    }

    if (currentIndex % numberOfCells < numberOfCells - 3) {
      // three cells right
      results.push(currentIndex + 3);
    }
    if (currentIndex % numberOfCells <= numberOfCells - 3) {
      if (currentIndex / numberOfCells > 1) {
        // 2 cells up, 2 cells right
        results.push(currentIndex + 2 - numberOfCells * 2);
      }
      if (currentIndex / numberOfCells < numberOfCells - 2) {
        // 2 cells down, 2 cells right
        results.push(currentIndex + 2 + numberOfCells * 2);
      }
    }

    return results.filter((result) => result >= 0 && board[result] === '');
  }
};
