import shipFactory from './shipFactory';

const gameboardFactory = () => {
  const board = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];
  const placeShip = (name, size, y, x, direction) => {
    const shipCoords = [];
    if (direction === 'v') {
      const end = size + y;
      for (let i = y; i < end; i++) {
        board[i][x] = name;
        // add each x & y coordinates to the array for later adding to the ship when constructed
        shipCoords.push({ x, y: i });
      }
    }
    if (direction === 'h') {
      const end = size + x;
      for (let i = x; i < end; i++) {
        board[y][i] = name;
        // add each x & y coordinates to the array for later adding to the ship when constructed
        shipCoords.push({ x: i, y });
      }
    }
    return shipCoords;
  };
  const receiveAttack = (obj) => {
    board[obj.y][obj.y] = 'm';
  };
  const setup = () => {
    const s1Coords = placeShip('s1', 4, 0, 2, 'v');
    const s1 = shipFactory(4, s1Coords);
    placeShip('s2', 2, 1, 4, 'h');
    return board;
  };
  const getBoard = () => board;
  return {
    receiveAttack,
    placeShip,
    setup,
    getBoard,
  };
};

export default gameboardFactory;
