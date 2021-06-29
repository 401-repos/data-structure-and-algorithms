'use strict';

const {Graph} = require('../graph-breadth-first');

describe('Graph Breadth first algorithm', () => {
    const graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(0);
    graph.addNode(3);
    graph.addNode(5);
    graph.addNode(4);
    graph.addEdge(0, 2);
    graph.addEdge(0, 1);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 5);
    
    it('should return an array of all the elements in the graph', () => {
        expect(graph.breadthFirstTraverse(1)).toEqual([1,3,5])
        expect(graph.breadthFirstTraverse(0)).toEqual([0,2,1,3,4,5]);
    });
    it('should throw an error', () => {
        expect(()=>{
            graph.breadthFirstTraverse()
        }).toThrow();
        expect(()=>{
            graph.breadthFirstTraverse(10)
        }).toThrow();
    });
    it('should return one element', () => {
        const graph2 = new Graph();
        graph2.addNode(20);
        graph2.addEdge(20,20);
        expect(graph2.breadthFirstTraverse(20)).toEqual([20]);
    });
});