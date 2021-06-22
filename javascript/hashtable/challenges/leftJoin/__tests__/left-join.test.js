'use strict';

const {leftJoin , HashTable} = require('../left-join');

describe('Left Join Function', () => {
    const left = new HashTable(1024);
    const right = new HashTable(1024);
    left.set("up" , "over");
    left.set("dark" , "blackish");
    left.set("small" , "tiny");
    it('should return only the array from the left table', () => {
        expect(leftJoin(left, right)).toEqual([["up" , "over",null],["dark" , "blackish",null],["small" , "tiny",null]])
    });
    it('should return an array of the results', () => {
        right.set("up" , "down");
        right.set("dark" , "light");
        right.set("small" , "big");        expect(leftJoin(left,right)).toEqual([
            [ 'up', 'over', 'down' ],
            [ 'dark', 'blackish', 'light' ],
            [ 'small', 'tiny', 'big' ]
        ]);
    });
    it('should return null for not in the right table', () => {
        left.set('tall', 'high');
        expect(leftJoin(left,right)[3][2]).toEqual(null);
    });
});