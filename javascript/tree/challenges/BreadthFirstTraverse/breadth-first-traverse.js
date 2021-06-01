'use strict';

const {
    BinarySearchTree
} = require('../BinaryTree/BinaryTree');
const {
    Queue
} = require('../../../stacksAndQueues/stacks-and-queues');

BinarySearchTree.prototype.bft = function () {
    let tempQueue = new Queue();
    let tempArr = [];
    tempQueue.enqueue(this.root);
    while (tempQueue.front) {
        tempArr.push(tempQueue.front.data.val);
        if (tempQueue.front.data.left) {
            tempQueue.enqueue(tempQueue.front.data.left);
        }
        if (tempQueue.front.data.right) {
            tempQueue.enqueue(tempQueue.front.data.right);
        }
        tempQueue.dequeue();
    }
    return tempArr;
}

module.exports = {BinarySearchTree}