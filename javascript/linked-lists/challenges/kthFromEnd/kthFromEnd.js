'use strict';

const {
    LinkedList,
    Node
} = require('../insertBefore/insertBefore.js');

LinkedList.prototype.kthFromEnd = function (k) {
    let current = this.head;
    let target = this.head;
    let counter = k;
    if (!current) {
        throw new Error('Empty List!');
    } else if(k < 0){
        throw new Error('Negative integer entered!!');
    }
    while (current.next) {
        current = current.next;
        if (counter > 0) {
            counter--;
        } else {
            target=target.next
        }
    }
    if (counter > 0) {
        throw new Error('K is more than length')
    }
    return target.data;
}

module.exports = {
    LinkedList,
    Node
}