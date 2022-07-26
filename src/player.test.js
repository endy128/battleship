import gameboardFactory from './gbFactory';
import playerFactory from './player';

describe('Player functions', () => {
  const player1 = playerFactory();
  const board = gameboardFactory();
  player1.autoAttack(board);
  const result = board.getBoard();
  const expected = ['m'];
  test('player can make a random attack and the board logs it', () => {
    console.table(result);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(expected),
      ]),
    );
  });
});
