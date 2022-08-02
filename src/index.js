import { drawBoard, drawSquareContents, playerEventListeners } from './dom';
import gameboardFactory from './gameboard';
import playerFactory from './player';

drawBoard('p1');
drawBoard('p2');
const p1Board = gameboardFactory('p1');

const initaliseGame = () => {
  const player1 = playerFactory();
  const player2 = playerFactory();
  const p2Board = gameboardFactory('p2');
  // p1Board.manualSetup();
  p2Board.setup();
  drawSquareContents('p1', p1Board.getBoard(), false);
  drawSquareContents('p2', p2Board.getBoard(), false);
  playerEventListeners(player1, p2Board, player2);
};

initaliseGame();

// gameplay logic
// p1 go... then call p2 & remove event listeners
// p2 go... then add the event listeners

export default p1Board;
