'use strict';

const {
    BinarySearchTree
} = require('../breadth-first-traverse');

describe('Breadth first traverse', () => {

    let BST = new BinarySearchTree(10);
    it('should return an array with one value', () => {
        expect(BST.bft()).toEqual([10]);
    });
    it('should return an array with breadth first traverse', () => {
        BST.add(5).add(15).add(3).add(7).add(1).add(4).add(12).add(18).add(6).add(8).add(11).add(14).add(16).add(19).add(100);
        expect(BST.bft()).toEqual([
            10,  5, 15,   3, 7, 12,
            18,  1,  4,   6, 8, 11,
            14, 16, 19, 100
          ])
    });
    it('should throw an error', () => {
        expect(()=>{
            let tree = new BinarySearchTree(5);
            tree.root = null;
            tree.bft();
        }).toThrow();
    });
});