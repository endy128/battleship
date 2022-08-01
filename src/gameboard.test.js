import gameboardFactory from './gameboard';

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
  test('receiveAttack() logs an "m" to an empty square y:9, x:9', () => {
    board.receiveAttack({ x: 9, y: 9 });
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
  test('receiveAttack() logs an "h" to a ship in square y:1, x:2', () => {
    board.receiveAttack({ y: 1, x: 2 });
    expect(board.getBoard()).toStrictEqual([
      ['', '', 's1', '', '', '', '', '', '', ''],
      ['', '', 'h', '', 's2', 's2', '', '', '', ''],
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
  test('Ship s1 received multiple attacks and is sunk, added to the isSunk array', () => {
    board.receiveAttack({ y: 0, x: 2 });
    board.receiveAttack({ y: 2, x: 2 });
    board.receiveAttack({ y: 3, x: 2 });
    expect(board.sunkShips).toStrictEqual(['s1']);
  });
  test('The gameboard can check if all ships are sunk', () => {
    board.receiveAttack({ y: 1, x: 4 });
    board.receiveAttack({ y: 1, x: 5 });
    expect(board.areAllShipsSunk()).toStrictEqual(true);
  });
});
