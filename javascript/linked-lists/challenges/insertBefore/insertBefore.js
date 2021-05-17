'use strict';

const {
    LinkedList,
    Node
} = require('../../challenges/insertAfter/insertAfter');

LinkedList.prototype.insertBefore = function (val, newVal) {
    let current = this.head;
    let beforeCurrent = null;
    let newNode = new Node(newVal);
    if (current) {
        if (this.includes(val)) {
            while (current.data != val) {
                beforeCurrent = current;
                current = current.next;
            }
            if (!beforeCurrent) {
                newNode.next = current;
                this.head = newNode;
                return this;
            }
            newNode.next = current;
            beforeCurrent.next = newNode;
            return this;
        } else {
            throw new Error("No value in the list equals " + val);
        }
    } else {
        throw new Error("Empty List")
    }
}

module.exports = {
    Node,
    LinkedList
}