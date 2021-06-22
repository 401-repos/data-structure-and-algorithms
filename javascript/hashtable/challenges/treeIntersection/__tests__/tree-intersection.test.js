'use strict';

const { Node, BinaryTree } = require('../../../../tree/tree');
const { treeIntersection } = require('../tree-intersection');
describe('Tree intersection function', () => {
    const bt1 = new BinaryTree(1);
    const bt2 = new BinaryTree(1);
    it('should return unique elements', () => {
        const bt1 = new BinaryTree(1);
        const bt2 = new BinaryTree(1);
        bt1.root.right = new Node(1)
        bt1.root.left = new Node(1)
        bt1.root.right.left = new Node(2)
        bt1.root.right.right = new Node(2)
        bt1.root.left.right = new Node(2)
        bt1.root.left.left = new Node(2)
        bt1.root.right.left.left = new Node(15)
        bt1.root.right.left.right = new Node(15)
        bt1.root.right.right.left = new Node(15)
        bt1.root.right.right.right = new Node(44)

        bt2.root.right = new Node(1)
        bt2.root.left = new Node(1)
        bt2.root.right.left = new Node(2)
        bt2.root.right.right = new Node(2)
        bt2.root.left.right = new Node(2)
        bt2.root.left.left = new Node(2)
        bt2.root.right.left.left = new Node(15)
        bt2.root.right.left.right = new Node(15)
        bt2.root.right.right.left = new Node(15)
        bt2.root.right.right.right = new Node(44)
        expect(treeIntersection(bt1, bt2)).toEqual([1, 2, 15, 44]);
    });
    it('should return an array of the intersection ', () => {
        expect(treeIntersection(bt1, bt2)).toEqual([1]);
    });
    it('should return nothing', () => {
        const bt1 = new BinaryTree(1);
        const bt2 = new BinaryTree(2);
        bt1.root.right = new Node(5)
        bt1.root.left = new Node(10)
        bt1.root.right.left = new Node(70)
        bt1.root.right.right = new Node(100)
        bt2.root.right = new Node(20)
        bt2.root.left = new Node(22)
        bt2.root.right.left = new Node(123)
        bt2.root.right.right = new Node(456)
        expect(treeIntersection(bt1,bt2)).toEqual([]);
    });
    it('should return all values', () => {
        bt1.root.right = new Node(5)
        bt1.root.left = new Node(10)
        bt1.root.right.left = new Node(70)
        bt1.root.right.right = new Node(100)
        bt1.root.left.right = new Node(25)
        bt1.root.left.left = new Node(45)
        bt1.root.right.left.left = new Node(15)
        bt1.root.right.left.right = new Node(34)
        bt1.root.right.right.left = new Node(546)
        bt1.root.right.right.right = new Node(44)
        bt2.root.right = new Node(5)
        bt2.root.left = new Node(10)
        bt2.root.right.left = new Node(70)
        bt2.root.right.right = new Node(100)
        bt2.root.left.right = new Node(25)
        bt2.root.left.left = new Node(45)
        bt2.root.right.left.left = new Node(15)
        bt2.root.right.left.right = new Node(34)
        bt2.root.right.right.left = new Node(546)
        bt2.root.right.right.right = new Node(44)
        expect(treeIntersection(bt1, bt2)).toEqual([
            1, 10, 45, 25, 5,
            70, 15, 34, 100, 546,
            44
        ]);
    });
});