'use strict';

const { Stack, Queue } = require('../../stacks-and-queues');

class PseudoQueue{
    constructor() {   
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(val) {
        this.stack1.push(val);
        return this;
    }
    dequeue() {
        while (this.stack1.top) {
            this.stack2.push(this.stack1.top.data);
            this.stack1.pop();
        }
        let retVal = this.stack2.pop();
        while (this.stack2.top) {
            this.stack1.push(this.stack2.top.data);
            this.stack2.pop();
        }
        return retVal;
    }
        
}
module.exports = PseudoQueue;