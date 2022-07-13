const shipFactory = (size, coords) => {
  const hits = [];
  const getHits = () => hits;
  const getSize = () => size;
  const getCoord = () => coords;
  const setHit = (yVal, xVal) => hits.push({ y: yVal, x: xVal });
  const setCoord = (yVal, xVal) => coords.push({ y: yVal, x: xVal });
  const isSunk = () => {
    if (hits.length === getSize()) {
      return true;
    }
    return false;
  };
  return {
    isSunk,
    getSize,
    getHits,
    getCoord,
    setHit,
    setCoord,
  };
};

export default shipFactory;
