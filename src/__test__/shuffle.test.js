const { expect } = require('@jest/globals');
const shuffle = require('../shuffle');

describe('Shuffle Algorithm', () => {
  it('Outputs an array', () => {
    const result = shuffle([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
  });

  it('Returns an array whose length is equal to input array length', () => {
    const input = [1, 2, 3];
    const result = shuffle([1, 2, 3]);
    expect(result.length).toEqual(input.length);
  });

  it('Returns empty array when given empty array', () => {
    const input = [];
    const result = shuffle([]);
    expect(result.length).toEqual(0) &&
      expect(result).toEqual(expect.arrayContaining(input));
  });

  it('Returns identical array when given an array with a single element', () => {
    const input = [10];
    const result = shuffle([10]);
    expect(result).toEqual(input);
  });

  it('Returns an array that includes all elements from the input range', () => {
    const input = [1, 2, 3];
    const result = shuffle([1, 2, 3]);
    expect(result).toEqual(expect.arrayContaining(input));
  });

  it('Should not return an array that does not contain all elements from the input range', () => {
    const input = [1, 2, 3];
    const result = shuffle([1, 3, 4]);
    expect(result).not.toEqual(expect.arrayContaining(input));
  });
});
