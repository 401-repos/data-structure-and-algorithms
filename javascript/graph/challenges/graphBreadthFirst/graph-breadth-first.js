'sue strict';

const {Graph} = require('../../graph');
const {Queue} = require('../../../stacksAndQueues/stacks-and-queues');

Graph.prototype.breadthFirstTraverse = function(start){
    if(start==undefined || start == null){
        throw new Error('you should enter a value to start with')
    }
    const queue = new Queue();
    const done = new Set();
    const output = [];
    if(this.map.has(start)){
        queue.enqueue(start);
    }else{
        throw new Error("There is no vertex in the graph with the value "+start)
    }
    while(!queue.isEmpty()){
        const vertex = queue.dequeue().data;
        output[output.length] = vertex;
        done.add(vertex);
        const adj = this.getAdjacent(vertex);
        for(let {node} of adj){
            if(!done.has(node)){
                queue.enqueue(node);
                done.add(node);
            }
        }
    }
    return output;

}

module.exports = {Graph};