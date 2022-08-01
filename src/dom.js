import p1Board from './index';

let myFunction;

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
      div.textContent = element;
    });
  });
};

const playerEventListeners = (p1, p2Board, p2, p1Board) => {
  const enemyBoard = document.querySelectorAll('.p2 .board .square');
  Array.from(enemyBoard).forEach((square) => {
    square.addEventListener('pointerdown', (e) => {
      const { y } = e.target.dataset;
      const { x } = e.target.dataset;
      p1.attack(p2Board, { y, x });
      drawSquareContents('p2', p2Board.getBoard(), true);
      if (p2Board.areAllShipsSunk() === true) {
        console.log('All P2 ships SUNK!!');
        return;
      }
      p2.autoAttack(p1Board);
      drawSquareContents('p1', p1Board.getBoard());
    });
  });
  const playerBoard = document.querySelectorAll('.p1 .board .square');
  Array.from(playerBoard).forEach((square) => {
    square.addEventListener('pointerdown', manuallyPlaceShip);
    // const direction = 'v';
    // const y = Number(e.target.dataset.y);
    // const x = Number(e.target.dataset.x);
    // p1Board.playerPlaceShip({ y, x, direction }, 's1');
    // drawSquareContents('p1', p1Board.getBoard());
  });
};

const manuallyPlaceShip = (e) => {
  const direction = 'v';
  const y = Number(e.target.dataset.y);
  const x = Number(e.target.dataset.x);
  p1Board.playerPlaceShip({ y, x, direction }, 's1');
  drawSquareContents('p1', p1Board.getBoard());
};

const removeSetUpListeners = () => {
  console.log('remove event listener');
  const playerBoard = document.querySelectorAll('.p1 .board .square');
  Array.from(playerBoard).forEach((square) => {
    try {
      square.removeEventListener('pointerdown', manuallyPlaceShip);
    } catch (error) {
      console.error(error);
    }
  });
};

export {
  drawBoard, drawSquareContents, playerEventListeners, removeSetUpListeners,
};
