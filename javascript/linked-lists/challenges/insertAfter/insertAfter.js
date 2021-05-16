'use strict';

const {
    LinkedList,
    Node
} = require('../../challenges/append/append');


LinkedList.prototype.insertAfter = function (val, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    if (current) {
        if (this.includes(val)) {
            while (current.data != val) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
            return this;
        } else {
            throw new Error("No value in the list equals " + val);
        }
    } else {
        throw new Error("Empty List")
    }
}

module.exports = {
    LinkedList,
    Node
}