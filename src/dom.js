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

const playerEventListeners = (player, enemyBoard) => {
  const playerBoard = document.querySelectorAll('.p2 .board .square');
  Array.from(playerBoard).forEach((square) => {
    square.addEventListener('pointerdown', (e) => {
      const squareY = e.target.attributes['data-y'].value;
      const squareX = e.target.attributes['data-x'].value;
      player.attack(enemyBoard, { y: squareY, x: squareX });
      drawSquareContents('p2', enemyBoard.getBoard());
    });
  });
};

export { drawBoard, drawSquareContents, playerEventListeners };
