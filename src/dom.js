const drawBoard = (player) => {
  const board = document.querySelector(`.${player} .board`);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement('div');
      div.dataset.y = i;
      div.dataset.x = j;
      div.classList.add('square');
      board.appendChild(div);
    }
  }
};

const drawSquareContents = (player, board) => {
  board.forEach((array, coordY) => {
    array.forEach((element, coordX) => {
      const y = coordY;
      const x = coordX;
      const div = document.querySelector(`.${player} [data-y="${y}"][data-x="${x}"]`);
      div.textContent = element;
    });
  });
};

const playerEventListeners = (p1, p2Board, p2, p1Board) => {
  const playerBoard = document.querySelectorAll('.p2 .board .square');
  Array.from(playerBoard).forEach((square) => {
    square.addEventListener('pointerdown', (e) => {
      const squareY = e.target.dataset.y;
      const squareX = e.target.dataset.x;
      p1.attack(p2Board, { y: squareY, x: squareX });
      drawSquareContents('p2', p2Board.getBoard());
      if (p2Board.areAllShipsSunk() === true) {
        console.log('All P2 ships SUNK!!');
        return;
      }
      p2.autoAttack(p1Board);
      drawSquareContents('p1', p1Board.getBoard());
    });
  });
};

export { drawBoard, drawSquareContents, playerEventListeners };
