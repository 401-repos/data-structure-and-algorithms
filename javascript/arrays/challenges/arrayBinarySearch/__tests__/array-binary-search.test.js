'use strict';

const binarySearch = require('../array-binary-search.js');

describe('Testing Binary search for arrays', () => {
  test('Should return the at which the target element is present', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
  });
});
describe('Testing Binary search for arrays', () => {
  test('Should return -1 because the element does not exist in the array', () => {
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);
    expect(binarySearch([],1)).toEqual(-1);
  });

});