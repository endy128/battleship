import shipFactory from './shipFactory';

describe('Ship functions', () => {
  const ship1 = shipFactory(4);
  const ship2 = shipFactory(6);
  test('ship1 has length of 4', () => {
    expect(ship1.getSize()).toBe(4);
  });
  test('ship2 has length of 6', () => {
    expect(ship2.getSize()).toBe(6);
  });
  test('Is not sunk', () => {
    expect(ship1.isSunk()).toBe(false);
  });
  test('Has no hits yet', () => {
    expect(ship1.getHits()).toStrictEqual([]);
  });
});

describe('Ship gets hit', () => {
  const ship1 = shipFactory(4);
  ship1.setHit(0, 2);
  ship1.setHit(1, 2);
  ship1.setHit(2, 2);
  ship1.setHit(3, 2);
  test('Ships can receive a hit', () => {
    expect(ship1.getHits()).toStrictEqual([{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }]);
  });
  test('Is ship1 sunk?', () => {
    expect(ship1.isSunk()).toBe(true);
  });
});
