import shipFactory from './shipFactory';

const gameboardFactory = () => {
  const sunkShips = [];
  let s1;
  let s2;
  let s3;
  let s4;
  let s5;
  let s6;
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
  const getSquareContents = (obj) => board[obj.y][obj.x];
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
        case 's5':
          s5.setHit(obj.y, obj.x);
          if (s5.isSunk() === true) {
            sunkShips.push('s5');
          }
          break;
        case 's6':
          s6.setHit(obj.y, obj.x);
          if (s6.isSunk() === true) {
            sunkShips.push('s6');
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
    const s3Coords = placeShip('s3', 5, 3, 5, 'v');
    const s4Coords = placeShip('s4', 3, 7, 1, 'h');
    const s5Coords = placeShip('s5', 5, 9, 0, 'h');
    const s6Coords = placeShip('s6', 3, 4, 7, 'h');
    s1 = shipFactory(4, s1Coords);
    s2 = shipFactory(2, s2Coords);
    s3 = shipFactory(5, s3Coords);
    s4 = shipFactory(3, s4Coords);
    s5 = shipFactory(5, s5Coords);
    s6 = shipFactory(3, s6Coords);
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
    getSquareContents,
  };
};

export default gameboardFactory;
