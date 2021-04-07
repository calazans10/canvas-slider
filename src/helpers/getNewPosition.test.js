import getNewPosition from './getNewPosition';

describe('getNewPosition', () => {
  const dragBoundaryLimit = -3840;

  test('should return a position to avoid to drag outside left', () => {
    const pos = { x: 205, y: -3 };
    const expected = { x: 0, y: 0 };
    expect(getNewPosition(pos, dragBoundaryLimit)).toEqual(expected);
  });

  test('should return a position to avoid to drag outside right', () => {
    const pos = { x: -4055, y: 26 };
    const expected = { x: -3840, y: 0 };
    expect(getNewPosition(pos, dragBoundaryLimit)).toEqual(expected);
  });

  test('should return a position to permit to drag', () => {
    const pos = { x: -9, y: -1 };
    const expected = { x: -9, y: 0 };
    expect(getNewPosition(pos, dragBoundaryLimit)).toEqual(expected);
  });
});
