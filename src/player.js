import gameboardFactory from './gbFactory';

const playerFactory = () => {
  const autoAttack = (enemyBoard) => {
    const ranX = Math.floor(Math.random() * 9);
    const ranY = Math.floor(Math.random() * 9);
    enemyBoard.receiveAttack({ y: ranY, x: ranX });
  };
  return {
    autoAttack,
  };
};

export default playerFactory;
