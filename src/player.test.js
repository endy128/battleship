import gameboardFactory from './gbFactory';
import playerFactory from './player';

describe('Player functions', () => {
  const player1 = playerFactory();
  test('player can make a random attack and the board logs it with "m" on the board', () => {
    const board = gameboardFactory();
    player1.autoAttack(board);
    const result = board.getBoard();
    const expected = ['m'];
    console.table(result);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(expected),
      ]),
    );
  });
  test('Player can attack with set coordinates y:4 x:8', () => {
    const board = gameboardFactory();
    const result = board.getBoard();
    player1.attack(board, { y: 4, x: 8 });
    const expected = ['m'];
    console.table(result);
    expect(result[4][8]).toEqual('m');
  });
});
