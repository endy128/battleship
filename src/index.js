import { drawBoard, drawSquareContents, setupEventListeners } from './dom';
import { gameboardFactory } from './gameboard';
import playerFactory from './player';

drawBoard('p1');
drawBoard('p2');
const p1Board = gameboardFactory('p1');

const player1 = playerFactory();
const player2 = playerFactory();
const p2Board = gameboardFactory('p2');
// p1Board.manualSetup();
p2Board.setup();
drawSquareContents('p1', p1Board.getBoard(), true);
drawSquareContents('p2', p2Board.getBoard(), true);
// playerEventListeners(player1, p2Board, player2);
setupEventListeners();

// gameplay logic
// p1 go... then call p2 & remove event listeners
// p2 go... then add the event listeners

export {
  p1Board, p2Board, player1, player2,
};
