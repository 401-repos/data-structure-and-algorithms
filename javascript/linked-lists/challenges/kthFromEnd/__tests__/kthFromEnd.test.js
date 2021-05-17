'use strict';

const { LinkedList } = require('../kthFromEnd');
let ll = new LinkedList();
ll.append('a').append('b').append('c').append('d').append('e').append('f').append('g').append('h');
let ll2 = new LinkedList();
ll2.append('1')
describe('Kth from end Linked List method', () => {
    it('should throw Where k is greater than the length of the linked list ', () => {
        expect(()=> ll.kthFromEnd(10)).toThrow('');
    });
    it('should return the head value Where k and the length of the list are the same', () => {
        expect(ll.kthFromEnd(7)).toEqual('a');
    });
    it('Where k is not a positive integer', () => {
        expect(() => ll.kthFromEnd(-1)).toThrow();
    });
    it('should return the head value Where the linked list is of a size 1', () => {
        expect(ll2.kthFromEnd(0)).toEqual('1');
    });
    it('should return valid output “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        expect(ll.kthFromEnd(5)).toBeDefined();
    });
});