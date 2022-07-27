const drawBoard = (player) => {
  const board = document.querySelector(`.${player} .board`);
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 10; j++) {
      const div = document.createElement('div');
      div.dataset.y = i;
      div.dataset.x = j;
      div.classList.add('square');
      row.appendChild(div);
    }
    board.appendChild(row);
  }
};

const pageSetup = () => {

};

export { drawBoard, pageSetup };
