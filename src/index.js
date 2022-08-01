import { drawBoard, drawSquareContents, playerEventListeners } from './dom';
import gameboardFactory from './gbFactory';
import playerFactory from './player';

drawBoard('p1');
drawBoard('p2');

const initaliseGame = () => {
  const player1 = playerFactory();
  const player2 = playerFactory();
  const p1Board = gameboardFactory('p1');
  const p2Board = gameboardFactory('p2');
  p1Board.setup();
  p2Board.setup();
  drawSquareContents('p1', p1Board.getBoard());
  drawSquareContents('p2', p2Board.getBoard(), true);
  playerEventListeners(player1, p2Board, player2, p1Board);
};

initaliseGame();

// gameplay logic
// p1 go... then call p2 & remove event listeners
// p2 go... then add the event listeners
