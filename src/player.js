import gameboardFactory from './gbFactory';

const playerFactory = () => {
  const attack = (enemyBoard, coordinates) => {
    enemyBoard.receiveAttack({ y: coordinates.y, x: coordinates.x });
  };
  const autoAttack = (enemyBoard) => {
    const ranX = Math.floor(Math.random() * 9);
    const ranY = Math.floor(Math.random() * 9);
    if (enemyBoard.getSquareContents({ y: ranY, x: ranX }) === 'm'
      || enemyBoard.getSquareContents({ y: ranY, x: ranX }) === 'h') {
      autoAttack(enemyBoard);
    } else {
      enemyBoard.receiveAttack({ y: ranY, x: ranX });
    }
  };
  return {
    autoAttack,
    attack,
  };
};

export default playerFactory;
