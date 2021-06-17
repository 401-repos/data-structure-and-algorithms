const {
    BinarySearchTree
} = require('../BinaryTree');

const tree = new BinarySearchTree(10);

tree.add(20).add(100).add(50).add(5).add(1).add(19).add(80);

describe('Max value of the tree', () => {
    it('should return the  max value in the tree', () => {
        expect(tree.max()).toEqual(100);
    });
    it('should return the  max value in the tree', () => {
        tree.add(200)
        expect(tree.max()).toEqual(200);
    });
});