const insSort = require('../ins-sort');

describe('Insertion sort algorithm', () => {    
    it('should return a sorted array', () => {
        let array1 = [8,4,23,42,16,15];
        insSort(array1);
        expect(array1).toEqual([4,8,15,16,23,42])
    });    
    it('should return a sorted array', () => {
        let array2 = [20,18,12,8,5,-2];
        insSort(array2);
        expect(array2).toEqual([-2,5,8,12,18,20])
    });    
    it('should return a sorted array', () => {
        let array3 = [5,12,7,5,5,7];
        insSort(array3);
        expect(array3).toEqual([5,5,5,7,7,12])
    });    
    it('should return a sorted array', () => {
        let array4 = [2,3,5,7,13,11];
        insSort(array4);
        expect(array4).toEqual([2,3,5,7,11,13])
    });
});