import shipFactory from './shipFactory';
import { removeSetUpListeners } from './dom';

const NUMBER_OF_SHIPS = 6;
const S1_SIZE = 4;
const S2_SIZE = 2;
const S3_SIZE = 5;
const S4_SIZE = 3;
const S5_SIZE = 5;
const S6_SIZE = 3;

let counter = 1;
let isSetUpComplete = false;

const gameboardFactory = (playerName) => {
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
    if (sunkShips.length >= NUMBER_OF_SHIPS) {
      console.log(`ALL ${playerName}'s SHIPS SUNK!`);
      return true;
    }
    return false;
  };

  const getSquareContents = (obj) => board[obj.y][obj.x];

  const placeShip = (name, size, y, x, direction) => {
    const shipCoords = [];
    if (direction === 'v') {
      const end = size + y;
      for (let i = y; i < end; i += 1) {
        board[i][x] = name;
        // add each x & y coordinates to the array for later adding to the ship when constructed
        shipCoords.push({ x, y: i });
      }
    }
    if (direction === 'h') {
      const end = size + x;
      for (let i = x; i < end; i += 1) {
        board[y][i] = name;
        // add each x & y coordinates to the array for later adding to the ship when constructed
        shipCoords.push({ x: i, y });
      }
    }
    return shipCoords;
  };
  const receiveAttack = (obj) => {
    // m == miss, h == hit. '' == empty
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
          if (s1.isSunk() === true) {
            sunkShips.push('s1');
            console.log(`${playerName} ship 1: SUNK!`);
          }
          break;
        case 's2':
          s2.setHit(obj.y, obj.x);
          if (s2.isSunk() === true) {
            sunkShips.push('s2');
            console.log(`${playerName} ship 2: SUNK!`);
          }
          break;
        case 's3':
          s3.setHit(obj.y, obj.x);
          if (s3.isSunk() === true) {
            sunkShips.push('s3');
            console.log(`${playerName} ship 3: SUNK!`);
          }
          break;
        case 's4':
          s4.setHit(obj.y, obj.x);
          if (s4.isSunk() === true) {
            sunkShips.push('s4');
            console.log(`${playerName} ship 4: SUNK!`);
          }
          break;
        case 's5':
          s5.setHit(obj.y, obj.x);
          if (s5.isSunk() === true) {
            sunkShips.push('s5');
            console.log(`${playerName} ship 5: SUNK!`);
          }
          break;
        case 's6':
          s6.setHit(obj.y, obj.x);
          if (s6.isSunk() === true) {
            sunkShips.push('s6');
            console.log(`${playerName} ship 6: SUNK!`);
          }
          break;
        default:
          console.log('Error, no ship matched');
      }
    }
  };

  const getRandomNum = (max) => Math.floor(Math.random() * max);

  const checkAvailableSpace = (obj, direction, size) => {
    if (direction === 'h') {
      const endCoord = obj.x + size;
      for (let i = obj.x; i < endCoord; i += 1) {
        const content = board[obj.y][i];
        if (content !== '') return false;
      }
      return true;
    }
    if (direction === 'v') {
      const endCoord = obj.y + size;
      for (let i = obj.y; i < endCoord; i += 1) {
        const content = board[i][obj.x];
        if (content !== '') return false;
      }
      return true;
    }
    return false;
  };
  const autoPlaceShip = (name, size) => {
    let direction = 'v';
    if (getRandomNum(2) === 1) direction = 'h';
    const maxCoord = 11 - size;
    const y = getRandomNum(maxCoord);
    const x = getRandomNum(maxCoord);
    if (getSquareContents({ y, x }) === '' && checkAvailableSpace({ y, x }, direction, size) === true) {
      const shipCoords = placeShip(name, size, y, x, direction);
      return shipCoords;
    }
    autoPlaceShip(name, size);
  };
  const setup = () => {
    // const s1Coords = placeShip('s1', 4, 0, 2, 'v');
    // const s2Coords = placeShip('s2', 2, 1, 4, 'h');
    // const s3Coords = placeShip('s3', 5, 3, 5, 'v');
    // const s4Coords = placeShip('s4', 3, 7, 1, 'h');
    // const s5Coords = placeShip('s5', 5, 9, 0, 'h');
    // const s6Coords = placeShip('s6', 3, 4, 7, 'h');
    // s1 = shipFactory(4, s1Coords);
    // s2 = shipFactory(2, s2Coords);
    // s3 = shipFactory(5, s3Coords);
    // s4 = shipFactory(3, s4Coords);
    // s5 = shipFactory(5, s5Coords);
    // s6 = shipFactory(3, s6Coords);
    const s1Coords = autoPlaceShip('s1', S1_SIZE);
    const s2Coords = autoPlaceShip('s2', S2_SIZE);
    const s3Coords = autoPlaceShip('s3', S3_SIZE);
    const s4Coords = autoPlaceShip('s4', S4_SIZE);
    const s5Coords = autoPlaceShip('s5', S5_SIZE);
    const s6Coords = autoPlaceShip('s6', S6_SIZE);
    s1 = shipFactory(S1_SIZE, s1Coords);
    s2 = shipFactory(S2_SIZE, s2Coords);
    s3 = shipFactory(S3_SIZE, s3Coords);
    s4 = shipFactory(S4_SIZE, s4Coords);
    s5 = shipFactory(S5_SIZE, s5Coords);
    s6 = shipFactory(S6_SIZE, s6Coords);

    // return board;
  };

  const setUpComplete = () => {
    removeSetUpListeners();
  };

  const playerPlaceShip = (obj, name) => {
    switch (counter) {
      case 1: {
        const s1Coords = placeShip('s1', S1_SIZE, obj.y, obj.x, obj.direction);
        s1 = shipFactory(S1_SIZE, s1Coords);
        counter += 1;
        break;
      }
      case 2: {
        const s2Coords = placeShip('s2', S2_SIZE, obj.y, obj.x, obj.direction);
        s2 = shipFactory(S2_SIZE, s2Coords);
        counter += 1;
        break;
      }
      case 3: {
        const s3Coords = placeShip('s3', S3_SIZE, obj.y, obj.x, obj.direction);
        s3 = shipFactory(S3_SIZE, s3Coords);
        counter += 1;
        break;
      }
      case 4: {
        const s4Coords = placeShip('s4', S4_SIZE, obj.y, obj.x, obj.direction);
        s4 = shipFactory(S4_SIZE, s4Coords);
        counter += 1;
        break;
      }
      case 5: {
        const s5Coords = placeShip('s5', S5_SIZE, obj.y, obj.x, obj.direction);
        s5 = shipFactory(S5_SIZE, s5Coords);
        counter += 1;
        break;
      }
      case 6: {
        const s6Coords = placeShip('s6', S6_SIZE, obj.y, obj.x, obj.direction);
        s6 = shipFactory(S6_SIZE, s6Coords);
        isSetUpComplete = true;
        setUpComplete();
        break;
      }
      default: {
        console.log(`Unable to place ship: ${name}`);
      }
    }
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
    playerPlaceShip,
  };
};

export default gameboardFactory;