'use strict';

const insertSheft = require('../array-shift.js');

describe('testing array method insert and sheft', () => {
  test('should insert a new element at the middle position of the array', () => {
    expect(insertSheft.insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertSheft.insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(insertSheft.insertShiftArray([], 5)).toEqual([5]);
  });
});