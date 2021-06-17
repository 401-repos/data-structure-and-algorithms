'use strict';

const {
    KTree,
    KTreeNode
} = require('../../tree');

function fizzBuzzTree(tree) {
    const output = new KTree(fizBuzz(tree.root.value));
    let current = output.root;
    let traverse = (root, type)=>{
        let node = new KTreeNode(fizBuzz(root.value))
        if(type){
            current[type] =  node;
            current = current[type]
        }
        let back = current;
        if(root.child){
            traverse(root.child, 'child')
        }
        current = back;
        if(root.sibling){
            traverse(root.sibling, 'sibling')
        }
    }
    traverse(tree.root)
    return output;
}

function fizBuzz (num){
    return (num%3 == 0 && num%5 == 0) ? 'FizzBuzz' : (! (num % 3)) ? 'Fizz' : (! (num % 5) ) ? 'Buzz' : num;
}

module.exports = {KTree, KTreeNode, fizzBuzzTree}