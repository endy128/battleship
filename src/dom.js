import { p1Board } from './index';

let shipPlacementDirection = 'v';

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

const isPlacementValid = (obj) => {
  console.log(obj);
  return true;
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

const removeSetUpListeners = () => {
  console.log('remove event listener');
  const div = document.querySelector('.messages.p1');
  const playerBoard = document.querySelectorAll('.p1 .board .square');
  Array.from(playerBoard).forEach((square) => {
    square.removeEventListener('pointerdown', manuallyPlaceShip);
  });
  div.removeEventListener('pointerdown', toggleShipPlacementDirection);
};

const toggleShipPlacementDirection = () => {
  const div = document.querySelector('.messages.p1');
  if (div.textContent === 'Vertical') {
    div.textContent = 'Horizontal';
    shipPlacementDirection = 'h';
  } else {
    div.textContent = 'Vertical';
    shipPlacementDirection = 'v';
  }
};

const highlightSquares = (e) => {
  const div = e.target;
  // get direction so we can set following sqaures
  const direction = document.querySelector('.messages.p1').textContent;
  div.classList.add('selected');
  console.log(p1Board.getCounter());
  switch (p1Board.getCounter()) {
    case 1: {
      // use for loop to set following squares to red
      // need to check if highlighted square is valid first!!!
      // for (let i =  )
    } break;
  }
};

const removeHighlightSquares = (e) => {
  const div = e.target;
  div.classList.remove('selected');
};

const playerEventListeners = (p1, p2Board, p2) => {
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
    square.addEventListener('pointerover', highlightSquares);
    square.addEventListener('pointerout', removeHighlightSquares);

    // const direction = 'v';
    // const y = Number(e.target.dataset.y);
    // const x = Number(e.target.dataset.x);
    // p1Board.playerPlaceShip({ y, x, direction }, 's1');
    // drawSquareContents('p1', p1Board.getBoard());
  });
  const button = document.querySelector('.messages.p1');
  button.textContent = 'Vertical';
  button.addEventListener('pointerdown', toggleShipPlacementDirection);
};

export {
  drawBoard, drawSquareContents, playerEventListeners, removeSetUpListeners,
};
