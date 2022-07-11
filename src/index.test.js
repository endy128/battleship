import shipFactory from './index.js';

describe('Ship functions', () => {
  const testShip = shipFactory(4);
  test('Has length of 4', () => {
    expect(testShip.getLength()).toBe(4);
  });
  test('Is not sunk', () => {
    expect(testShip.isSunk).toBe(false);
  });
  test('Has no hits yet', () => {
    expect(testShip.getHits()).toStrictEqual([]);
  });
});
