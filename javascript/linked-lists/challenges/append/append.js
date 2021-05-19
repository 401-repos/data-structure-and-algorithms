'use strict';

const {LinkedList, Node} = require('../../linked-lists.js');

LinkedList.prototype.append = function (val) {
    let current = this.head;
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        return this;
    }
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    return this;
}
module.exports = {
    LinkedList,
    Node
};