import getDrawImageParams from './getDrawImageParams';

describe('getDrawImageParams', () => {
  test('should return params to draw an image', () => {
    const expected = {
      dHeight: 400,
      dWidth: 640,
      dx: 0,
      dy: 0,
    };
    expect(getDrawImageParams({ width: 2880, height: 1800 }, 0, 640, 400)).toEqual(expected);
  });
});
