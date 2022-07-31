import { drawBoard, drawSquareContents, playerEventListeners } from './dom';
import gameboardFactory from './gbFactory';
import playerFactory from './player';

drawBoard('p1');
drawBoard('p2');

const initaliseGame = () => {
  const player1 = playerFactory();
  const player2 = playerFactory();
  const p1Board = gameboardFactory();
  const p2Board = gameboardFactory();
  p1Board.setup();
  p2Board.setup();
  // player1.attack(p2Board, { y: 1, x: 2 });
  // player2.autoAttack(p1Board);
  drawSquareContents('p1', p1Board.getBoard());
  // just for testing, see the CPUs board
  drawSquareContents('p2', p2Board.getBoard());
  playerEventListeners(player1, p2Board);
};

initaliseGame();
