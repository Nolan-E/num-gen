const { expect } = require('@jest/globals');
const shuffle = require('../shuffle');

test('Outputs an array', () => {
  const result = shuffle([1,2,3]);
  expect(Array.isArray(result)).toBe(true);
});

test('Output array length is equal to input array length', () => {
  const input = [1,2,3];
  const result = shuffle([1,2,3]);
  expect(result.length).toEqual(input.length);
});

test('Returns empty array when given empty array', () => {
  const result = shuffle([]);
  expect(result.length).toEqual(0) && expect(result).toEqual(expect.arrayContaining(input));
});

test('Returns identical array when given an array with a single element', () => {
  const input = [10];
  const result = shuffle([10]);
  expect(result).toEqual(input);
});

test('Output array includes all elements from input range', () => {
  const input = [1,2,3];
  const result = shuffle([1,2,3]);
  expect(result).toEqual(expect.arrayContaining(input));
});

test('Output array does not match without all elements the input range', () => {
  const input = [1,2,3];
  const result = shuffle([1,3,4]);
  expect(result).not.toEqual(expect.arrayContaining(input));
});
