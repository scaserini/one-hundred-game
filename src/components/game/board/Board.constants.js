const numberOfCells = 10;
const initialBoard = Array.from({ length: numberOfCells ** 2 }).fill('');
const initialAvailablePositions = Array.from({ length: numberOfCells ** 2 }, (_, i) => i);

export { numberOfCells, initialBoard, initialAvailablePositions };
