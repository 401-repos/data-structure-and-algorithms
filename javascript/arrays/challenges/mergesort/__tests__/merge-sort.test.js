'use strict';

const MS = require('../mergesort');

describe('Merge Sort', () => {
    it('should return a sorted array', () => {
        let array1 = [8, 4, 23, 42, 16, 15];
        let newSorted = MS(array1);
        expect(newSorted).toEqual([4, 8, 15, 16, 23, 42])
    });
    it('should return a sorted array', () => {
        let array2 = [20, 18, 12, 8, 5, -2];
        let newSorted = MS(array2);
        expect(newSorted).toEqual([-2, 5, 8, 12, 18, 20])
    });
    it('should return a sorted array', () => {
        let array3 = [5, 12, 7, 5, 5, 7];
        let newSorted=MS(array3);
        expect(newSorted).toEqual([5, 5, 5, 7, 7, 12])
    });
    it('should return a sorted array', () => {
        let array4 = [2, 3, 5, 7, 13, 11];
        let newSorted=MS(array4);
        expect(newSorted).toEqual([2, 3, 5, 7, 11, 13])
    });
});