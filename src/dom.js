import {
  p1Board, p2Board, player1, player2,
} from './index';
import { shipSizes } from './gameboard';

let shipPlacementDirection = 'v';
let myTimeout;

const drawBoard = (player) => {
  const board = document.querySelector(`.${player} .board`);
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const div = document.createElement('div');
      div.dataset.y = i;
      div.dataset.x = j;
      div.classList.add('square');
      board.appendChild(div);
    }
  }
};

const drawSquareContents = (player, board, hideShips) => {
  board.forEach((array, coordY) => {
    array.forEach((element, coordX) => {
      const y = coordY;
      const x = coordX;
      const div = document.querySelector(`.${player} [data-y="${y}"][data-x="${x}"]`);
      if (hideShips === true) {
        if (/[s]\d/.test(element)) {
          return;
        }
      }
      if (/[s]\d/.test(element)) {
        div.classList.add('ship');
      }
      if (element === 'm') div.classList.add('miss');
      if (element === 'h') div.classList.add('hit');
      div.textContent = element;
    });
  });
};

const getEnemyMessage = () => {
  const messages = [
    'Scanning area...',
    'Calculating next move...',
    'Checking for enemy ships...',
    'Taking best shot!',
    'How do you like this one!?',
    'You\'ll never find my ships!',
    'Give up, you\'ll never hit me!',
    'Try this on for size!',
    'Hmmmmm, this is a tricky one...',
    'Uh oh!',
  ];
  const rand = Math.floor(Math.random() * 10);
  return messages[rand];
};

const message = (i, t, msg) => {
  document.querySelector('.messages').textContent += msg.charAt(i);
  myTimeout = setTimeout(() => {
    ((i < msg.length - 1) ? message(i + 1, t, msg) : false);
  }, t);
};

const clearMessage = () => {
  clearTimeout(myTimeout);
  document.querySelector('.messages').textContent = '';
};

const setInfo = (info) => {
  document.querySelector('.info').textContent = info;
};

const manuallyPlaceShip = (e) => {
  const direction = shipPlacementDirection;
  const y = Number(e.target.dataset.y);
  const x = Number(e.target.dataset.x);
  if (isPlacementValid({ x, y }) === true) {
    p1Board.playerPlaceShip({ y, x, direction }, 's1');
    drawSquareContents('p1', p1Board.getBoard());
  } else {

  }
};

const removeGameEventListeners = () => {
  const enemyBoard = document.querySelectorAll('.p2 .board .square');
  Array.from(enemyBoard).forEach((square) => {
    square.removeEventListener('pointerup', gameEventListeners);
  });
};

const removeSetUpListeners = () => {
  const div = document.querySelector('.messages');
  const playerBoard = document.querySelectorAll('.p1 .board .square');
  Array.from(playerBoard).forEach((square) => {
    square.removeEventListener('pointerup', manuallyPlaceShip);
    square.removeEventListener('pointermove', highlightSquares);
    square.removeEventListener('pointerout', removeHighlightSquares);
  });
  div.removeEventListener('pointerdown', toggleShipPlacementDirection);
};

const toggleShipPlacementDirection = () => {
  const div = document.querySelector('.messages');
  if (div.textContent === 'Vertical') {
    div.textContent = 'Horizontal';
    shipPlacementDirection = 'h';
  } else {
    div.textContent = 'Vertical';
    shipPlacementDirection = 'v';
  }
};

const isPlacementValid = (obj) => {
  const p1 = p1Board.getBoard();
  const currentShip = p1Board.getCounter();
  const length = shipSizes[currentShip];
  const dir = shipPlacementDirection;
  if (dir === 'h') {
    const endCoord = obj.x + length;
    if ((endCoord) > 10) { return false; }
    for (let i = obj.x; i < endCoord; i += 1) {
      if (p1[obj.y][i] !== '') return false;
    }
  }
  if (dir === 'v') {
    const endCoord = obj.y + length;
    if ((obj.y + length) > 10) { return false; }
    for (let i = obj.y; i < endCoord; i += 1) {
      if (p1[i][obj.x] !== '') return false;
    }
  }

  return true;
};

const getSquaresToHighlight = (obj) => {
  const squares = [];
  const dir = shipPlacementDirection;
  let currentShip = p1Board.getCounter();
  currentShip = Number(currentShip);
  const length = shipSizes[currentShip];
  if (dir === 'h') {
    const end = obj.x + length;
    if (end > 10) return false;
    for (let i = obj.x; i < end; i += 1) {
      squares.push({ y: obj.y, x: i });
    }
  }
  if (dir === 'v') {
    const end = obj.y + length;
    if (end > 10) return false;
    for (let i = obj.y; i < end; i += 1) {
      squares.push({ y: i, x: obj.x });
    }
  }
  return squares;
};

const highlightSquares = (e) => {
  const xCoord = Number(e.target.dataset.x);
  const yCoord = Number(e.target.dataset.y);
  const squares = getSquaresToHighlight({ y: yCoord, x: xCoord });
  if (squares === false) return;
  squares.forEach((square) => {
    document.querySelector(`.square[data-x="${square.x}"][data-y="${square.y}"]`)
      .classList.add('selected');
  });
};

const removeHighlightSquares = (e) => {
  const squares = document.querySelectorAll('.p1 .square');
  squares.forEach((square) => square.classList.remove('selected'));
};

const setupEventListeners = () => {
  const playerBoard = document.querySelectorAll('.p1 .board .square');
  Array.from(playerBoard).forEach((square) => {
    square.addEventListener('pointerup', manuallyPlaceShip);
    square.addEventListener('pointermove', highlightSquares);
    square.addEventListener('pointerout', removeHighlightSquares);
  });
  const button = document.querySelector('.messages');
  button.textContent = 'Vertical';
  button.addEventListener('pointerdown', toggleShipPlacementDirection);
};

const gameover = (winner) => {
  if (winner === 'p1') {
    removeGameEventListeners();
    setInfo('ALL CPU\'S SHIPS HAVE BEEN SUNK!');
    message(0, 100, 'YOU WIN!');
  }
  if (winner === 'p2') {
    removeGameEventListeners();
    setInfo('ALL PLAYER 1\'S SHIPS HAVE BEEN SUNK!');
    message(0, 100, 'YOU LOSE!');
  }
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const gameEventListeners = async (e) => {
  const { y } = e.target.dataset;
  const { x } = e.target.dataset;
  player1.attack(p2Board, { y, x });
  drawSquareContents('p2', p2Board.getBoard(), true);
  if (p2Board.areAllShipsSunk() === true) {
    gameover('p1');
    return;
  }
  clearMessage();
  message(0, 10, getEnemyMessage());
  await sleep(500);
  player2.autoAttack(p1Board);
  drawSquareContents('p1', p1Board.getBoard());
};

const setupGameEventListeners = () => {
  const enemyBoard = document.querySelectorAll('.p2 .board .square');
  Array.from(enemyBoard).forEach((square) => {
    square.addEventListener('pointerup', gameEventListeners);
  });
};

export {
  drawBoard, drawSquareContents, setupEventListeners,
  removeSetUpListeners, removeHighlightSquares,
  setupGameEventListeners, message, clearMessage,
  getEnemyMessage, setInfo, removeGameEventListeners,
  gameover,
};
