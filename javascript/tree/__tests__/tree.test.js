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
    });
    it('should return a collection from a inOorder traversal', () => {
        expect(tree.inOrder()).toEqual([5,10, 20]);
    });
    it('should return a collection from a postorder traversal', () => {
        expect(tree.postOrder()).toEqual([5, 20 , 10]);
    });
    it('should throw an error when adding an existing element', () => {
        expect(() => {
            tree.add(10);
        }).toThrow();
    });
    it('should add to the left and right', () => {
        tree.add(60);
        tree.add(4);
        expect(tree.count).toEqual(5);
    });
    it('should return true if the element exists', () => {
        expect(tree.contains(10)).toBeTruthy();
        expect(tree.contains(5)).toBeTruthy();
    });
    it('should return false if searching an element that does not exist', () => {
        expect(tree.contains(100)).toBeFalsy();
    });
});
