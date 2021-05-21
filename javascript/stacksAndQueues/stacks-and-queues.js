'use strict';

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(val) {
        const node = new Node(val);
        node.next = this.top;
        this.top = node;
        return this;
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('Empty Stack on pop');
        }
        const popped = this.top;
        this.top = this.top.next;
        popped.next = null;
        return popped;
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error('Empty list on peek')
        }
        return this.top;
    }
    isEmpty() {
        return this.top==null ? true : false;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = this.rear.next;
        }
        return this;
    }
    isEmpty() {
        return this.front == null ? true : false;
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Empty Queue on dequeuing')
        } else {
            const temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            return temp;
        }
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error('Empty list on peek');
        }
        return this.front;
    }
}

module.exports = {
    Node,
    Stack,
    Queue
}