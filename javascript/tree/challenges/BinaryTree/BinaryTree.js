'use strict';

const { BinaryTree ,BinarySearchTree } = require('../../tree');

BinarySearchTree.prototype.max = function () {
    let max = this.root.val;
    let traverse = root => {
        if (root.val > max) {
            max = root.val
        }
        if (root.left) {
            traverse(root.left)
        }
        if (root.right) {
            traverse(root.right)
        }
    }
    traverse(this.root);
    return max;
}

module.exports = {BinarySearchTree};