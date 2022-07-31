import { drawBoard, drawSquareContents, playerEventListeners } from './dom';
import gameboardFactory from './gbFactory';
import playerFactory from './player';

drawBoard('p1');
drawBoard('p2');

const initaliseGame = () => {
  const isWon = false;
  const playerTurn = 'p1';
  const player1 = playerFactory();
  const player2 = playerFactory();
  const p1Board = gameboardFactory('p1');
  const p2Board = gameboardFactory('p2');
  p1Board.setup();
  p2Board.setup();
  // player1.attack(p2Board, { y: 1, x: 2 });
  // player2.autoAttack(p1Board);
  drawSquareContents('p1', p1Board.getBoard());
  // just for testing, see the CPUs board
  drawSquareContents('p2', p2Board.getBoard(), true);
  playerEventListeners(player1, p2Board, player2, p1Board);
  // while (isWon === false) {
  //   if (playerTurn === 'p1') {

  //     playerTurn = 'p2;';
  //   } else {
  //     player2.autoAttack(p1Board);
  //     playerTurn = 'p1';
  //   }
  // }
};

initaliseGame();

// gameplay logic
// p1 go... then call p2 & remove event listeners
// p2 go... then add the event listeners
