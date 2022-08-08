import { clearMessage, getEnemyMessage, message } from './dom';

const playerFactory = () => {
  const attack = (enemyBoard, enemyCoords) => {
    enemyBoard.receiveAttack({ y: enemyCoords.y, x: enemyCoords.x });
  };
  const autoAttack = (enemyBoard) => {
    const squaresAlreadyTargeted = [];
    const ranX = Math.floor(Math.random() * 10);
    const ranY = Math.floor(Math.random() * 10);

    enemyBoard.getBoard().forEach((array, coordY) => {
      array.forEach((element, coordX) => {
        if (element === 'm' || element === 'h') {
          squaresAlreadyTargeted.push({ y: coordY, x: coordX });
        }
      });
    });

    if (squaresAlreadyTargeted.length === 100) {
      console.log('No spaces left!');
      return;
    }
    // pick another square if it's already been used
    if (squaresAlreadyTargeted.find((e) => e.y === ranY && e.x === ranX)) {
      autoAttack(enemyBoard);
    } else {
      enemyBoard.receiveAttack({ y: ranY, x: ranX });
      if (enemyBoard.areAllShipsSunk() === true) {
        console.log('All P1 ships SUNK!! P2 WINS!!!');
        removeGameEventListeners();
      }
    }
  };
  return {
    autoAttack,
    attack,
  };
};

export default playerFactory;
