'use strict';

const {
    LinkedList,
    Node
} = require('../append/append.js');
const zipLists = function (list1, list2) {
    if (!list1.head && !list2.head) {
        throw new Error('Invalid Lists Input')
    }
    if (!list1.head) {
        return list2;
    }
    if (!list2.head) {
        return list1;
    }
    const head = list1.head;
    let current = list1.head;
    while (current) {
        list1.head =current.next;
        if (current.next) {   
            current.next = list2.head;
            current = current.next;
        } else {
            current.next = list2.head;
            break;
        }
        list2.head = current.next;
        if (current.next) {   
            current.next = list1.head;
            current = current.next;
        } else {
            current.next = list1.head;
            break;
        }
    }
    let ret = new LinkedList();
    ret.head = head
    return ret;
}
module.exports ={LinkedList,zipLists}