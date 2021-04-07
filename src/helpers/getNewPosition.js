function getNewPosition(pos, dragBoundaryLimit) {
  const { x } = pos;

  let newX = 0;
  if (x < 0 && x <= dragBoundaryLimit) {
    newX = dragBoundaryLimit;
  } else if (x < 0) {
    newX = x;
  }

  return { x: newX, y: 0 };
}

export default getNewPosition;
