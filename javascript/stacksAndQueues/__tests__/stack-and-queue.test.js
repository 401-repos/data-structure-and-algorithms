'use strict';

const {
    Node,
    Stack,
    Queue
} = require('../stacks-and-queues');
describe('Stack', () => {
    it('should successfully instantiate an empty stack', () => {
        const stack = new Stack();
        expect(stack).toBeDefined();
        expect(stack.isEmpty()).toEqual(true);
    });
    it('should successfully push onto a stack', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.top).toBeDefined()
        expect(stack.top.data).toEqual(1);
    });
    it('should successfully push multiple values onto a stack', () => {
        const stack = new Stack();
        stack.push(1).push(2).push(3);
        expect(stack.top.data).toEqual(3);
        expect(stack.top.next.data).toEqual(2);
    });
    it('should successfully pop off the stack', () => {
        const stack = new Stack();
        stack.push(1).push(2).push(3);
        expect(stack.pop().data).toEqual(3);
        expect(stack.pop().data).toEqual(2);
        expect(stack.top.data).toEqual(1);
    });
    it('should successfully empty a stack after multiple pops', () => {
        const stack = new Stack();
        stack.push(1).push(2).pop()
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });
    it('should successfully peek the next item on the stack', () => {
        const stack = new Stack();
        stack.push(1).push(2).push(3);
        expect(stack.peek().data).toEqual(3);
    });
    it('should Calling pop or peek on empty stack raises exception', () => {
        const stack = new Stack();
        expect(() => {
            stack.peek()
        }).toThrow();
        expect(() => {
            stack.pop()
        }).toThrow();
    });
});

describe('Queue', () => {
    it('should successfully instantiate an empty Queue', () => {
        const queue = new Queue();
        expect(queue).toBeDefined();
        expect(queue.isEmpty()).toEqual(true);
    });
    it('should successfully enqueue onto a queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.front).toBeDefined()
        expect(queue.front.data).toEqual(1);
    });
    it('should successfully enqueue multiple values onto a queue', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.front.data).toEqual(1);
        expect(queue.front.next.data).toEqual(2);
    });
    it('should successfully dequeue off the queue', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.dequeue().data).toEqual(1);
        expect(queue.dequeue().data).toEqual(2);
        expect(queue.front.data).toEqual(3);
    });
    it('should successfully empty a queue after multiple pops', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2);
        queue.dequeue();
        console.log(queue);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });
    it('should successfully peek the next item on the queue', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.peek().data).toEqual(1);
    });
    it('should Calling dequeue or peek on empty queue raises exception', () => {
        const queue = new Queue();
        expect(() => {
            queue.peek()
        }).toThrow();
        expect(() => {
            queue.dequeue()
        }).toThrow();
    });
});