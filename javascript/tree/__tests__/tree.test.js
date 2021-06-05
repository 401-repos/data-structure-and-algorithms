const BST = require('../tree');
const tree = new BST.BinarySearchTree(10);

describe('Trees BTS', () => {
    it('should throw an error ', () => {
        expect(() => {
            const tree2 = new BST.BinarySearchTree();
        }).toThrow();
    });
    it('should successfully instantiate an empty tree', () => {
        expect(tree).toBeDefined();
    });
    it('should successfully instantiate a tree with a single root node', () => {
        expect(tree.inOrder().length).toEqual(1);
        expect(tree.count).toEqual(1);
    });
    it('should successfully add a left child and right child to a single root node', () => {
        tree.add(5).add(20);
        expect(tree.root.left).toBeDefined();
        expect(tree.root.right).toBeDefined();
    });
    it('should return a collection from a preorder traversal', () => {
        expect(tree.preOrder()).toEqual([10, 5, 20]);
        tree.add(6).add(25).add(42).add(36).add(15).add(22).add(2).add(12).add(100);
        expect(tree.preOrder()).toEqual([10, 5, 2, 6, 20, 15, 12, 25, 22, 42, 36, 100])
    });
    it('should return a collection from a inOorder traversal', () => {
        expect(tree.inOrder()).toEqual([2, 5, 6, 10, 12, 15, 20, 22, 25, 36, 42, 100]);
    });
    it('should return a collection from a postorder traversal', () => {
        expect(tree.postOrder()).toEqual([2, 6, 5, 12, 15, 22, 36, 100, 42, 25, 20, 10]);
    });
    it('should throw an error when adding an existing element', () => {
        expect(() => {
            tree.add(10);
        }).toThrow();
    });
    it('should add to the left and right', () => {
        tree.add(60);
        tree.add(4);
        expect(tree.count).toEqual(14);
    });
    it('should return true if the element exists', () => {
        expect(tree.contains(10)).toBeTruthy();
        expect(tree.contains(5)).toBeTruthy();
    });
    it('should return false if searching an element that does not exist', () => {
        expect(tree.contains(18)).toBeFalsy();
    });
});
