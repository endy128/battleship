import shipFactory from './shipFactory';

const gameboardFactory = () => {
  const sunkShips = [];
  let s1;
  let s2;
  let s3;
  let s4;
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
  const areAllShipsSunk = () => {
    // set number of ships
    if (sunkShips.length >= 2) {
      return true;
    }
    return false;
  };
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
    // m = miss, h = hit
    if (board[obj.y][obj.x] === '') {
      board[obj.y][obj.x] = 'm';
    }
    // check if a boat 's1', 's2'... is in the square
    if (/[s]\d/.test(board[obj.y][obj.x]) === true) {
      const hitShip = board[obj.y][obj.x];
      board[obj.y][obj.x] = 'h';
      switch (hitShip) {
        case 's1':
          s1.setHit(obj.y, obj.x);
          // console.log(s1.getHits());
          if (s1.isSunk() === true) {
            sunkShips.push('s1');
          }
          break;
        case 's2':
          s2.setHit(obj.y, obj.x);
          if (s2.isSunk() === true) {
            sunkShips.push('s2');
          }
          break;
        case 's3':
          s3.setHit(obj.y, obj.x);
          if (s3.isSunk() === true) {
            sunkShips.push('s3');
          }
          break;
        case 's4':
          s4.setHit(obj.y, obj.x);
          if (s4.isSunk() === true) {
            sunkShips.push('s4');
          }
          break;
        default:
          console.log('Error, no ship matched');
      }
    }
    // console.table(board);
  };
  const setup = () => {
    const s1Coords = placeShip('s1', 4, 0, 2, 'v');
    const s2Coords = placeShip('s2', 2, 1, 4, 'h');
    s1 = shipFactory(4, s1Coords);
    s2 = shipFactory(2, s2Coords);
    return board;
  };
  const getBoard = () => board;
  return {
    receiveAttack,
    placeShip,
    setup,
    getBoard,
    sunkShips,
    areAllShipsSunk,
  };
};

export default gameboardFactory;
