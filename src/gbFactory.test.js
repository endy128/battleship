import gameboardFactory from './gbFactory';

describe('Gameboard factory creates a board', () => {
  const board = gameboardFactory().setup();
  test('Place a ship on the board', () => {
    expect(board).toStrictEqual([
      ['', '', 's1', '', '', '', '', '', '', ''],
      ['', '', 's1', '', 's2', 's2', '', '', '', ''],
      ['', '', 's1', '', '', '', '', '', '', ''],
      ['', '', 's1', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ]);
  });
});

describe('Gameboard attack system works', () => {
  const board = gameboardFactory();
  board.setup();
  board.receiveAttack({ x: 9, y: 9 });
  test('receiveAttach() logs an "m" to an empty square x:0, y:0', () => {
    expect(board.getBoard()).toStrictEqual([
      ['', '', 's1', '', '', '', '', '', '', ''],
      ['', '', 's1', '', 's2', 's2', '', '', '', ''],
      ['', '', 's1', '', '', '', '', '', '', ''],
      ['', '', 's1', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', 'm'],
    ]);
  });
});
