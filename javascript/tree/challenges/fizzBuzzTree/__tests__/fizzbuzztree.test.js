'use strict';

const {KTree , KTreeNode, fizzBuzzTree} = require('../fizz-buzz-tree.js');
describe('FizzBuzzTree', () => {
    let tree = new KTree(5);
    tree.root.child = new KTreeNode(3)
    tree.root.child.sibling = new KTreeNode(1)
    tree.root.child.sibling.sibling = new KTreeNode(15)
    tree.root.child.sibling.sibling.sibling = new KTreeNode(4)
    tree.root.child.sibling.child = new KTreeNode(10)
    tree.root.child.sibling.child.child = new KTreeNode(13)
    tree.root.child.sibling.child.child.sibling = new KTreeNode(55)
    let tree15 = new KTree('Buzz');
    tree15.root.child = new KTreeNode('Fizz')
    tree15.root.child.sibling = new KTreeNode(1)
    tree15.root.child.sibling.sibling = new KTreeNode('FizzBuzz')
    tree15.root.child.sibling.sibling.sibling = new KTreeNode(4)
    tree15.root.child.sibling.child = new KTreeNode('Buzz')
    tree15.root.child.sibling.child.child = new KTreeNode(13)
    tree15.root.child.sibling.child.child.sibling = new KTreeNode('Buzz')
    
    let tree2 = fizzBuzzTree(tree);

    let tree3 = new KTree(15);
    let tree4 = fizzBuzzTree(tree3);
    it('should be equal ', () => {
        let tree10 = new KTree('FizzBuzz')
        expect(tree4).toEqual(tree10);
    });
    it('should be equal ', () => {
        expect(tree2).toEqual(tree15);
        expect(tree2.root).toEqual(tree15.root);
        expect(tree2.root.child).toEqual(tree15.root.child);
        expect(tree2.root.child.sibling).toEqual(tree15.root.child.sibling);
        expect(tree2.root.child.sibling.sibling).toEqual(tree15.root.child.sibling.sibling);
        expect(tree2.root.child.sibling.child).toEqual(tree15.root.child.sibling.child);
        expect(tree2.root.child.sibling.child.child.sibling).toEqual(tree15.root.child.sibling.child.child.sibling);
    });

});
