'use strict';

const PseudoQueue = require('../queue-with-stacks');



let sq = new PseudoQueue();

describe('PSeudo Queue', () => {
    it('should create new empty pseudo queue', () => {
        expect(sq).toBeDefined()
        expect(sq.stack1.top).toBe(null);
    });
    it('should push a new node to the Psedu queue', () => {
        sq.enqueue(1);
        expect(sq.stack1.top.data).toEqual(1);
    });
    it('should return a popped Item', () => {
        sq.enqueue(1).enqueue(2).enqueue(3);
        expect(sq.dequeue().data).toEqual(1);
    });
    it('should thtow', () => {
        expect(() => {
            sq.dequeue();
            sq.dequeue();
            sq.dequeue();
            sq.dequeue();
        }).toThrow();
    });
});