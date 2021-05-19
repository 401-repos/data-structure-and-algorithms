'use strict';

const { LinkedList, Node } = require('../kthFromEnd/kthFromEnd');

LinkedList.prototype.reverse = function () {
    if (!this.head) {
        throw new Error('List is empty')
    }
    let current = this.head;
    let beforeCurrent = null;
    while (current) {
        if (beforeCurrent == null) {
            beforeCurrent = current;
            current = current.next;
            beforeCurrent.next = null;
        } else {
            beforeCurrent = current;
            current = current.next;
            beforeCurrent.next = this.head;
            this.head = beforeCurrent;
        }
    }
    return this;
}
module.exports = {
    LinkedList,
    Node
}