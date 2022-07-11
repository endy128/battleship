const shipFactory = (length, coord) => ({
  length,
  coord,
  hits: [],
  isSunk: false,
  getLength() { return this.length; },
  getHits() { return this.hits; },
});

const ship1 = shipFactory(4);
// console.log(ship1);
// console.log(ship1.getLength());
// console.log(ship1.getHits());
// console.log(ship1.isSunk);

export default shipFactory;
