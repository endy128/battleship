import { drawBoard, drawSquareContents } from './dom';
import gameboardFactory from './gbFactory';

drawBoard('p1');
drawBoard('p2');

const initaliseGame = () => {
  const p1Board = gameboardFactory();
  const p2Board = gameboardFactory();
  p1Board.setup();
  p2Board.setup();
  console.table(p1Board.getBoard());
  console.table(p2Board.getBoard());
  drawSquareContents('p1', p1Board.getBoard());
  drawSquareContents('p2', p2Board.getBoard());
};

initaliseGame();
