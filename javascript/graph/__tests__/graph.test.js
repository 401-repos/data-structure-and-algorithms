'use strict';

const { Graph } = require('../graph');

describe('Graph data structure', () => {
    const graph = new Graph()
    it('should Node can be successfully added to the graph', () => {
        expect(graph.size).toEqual(0);
        expect(graph.map.size).toEqual(0);
        graph.addNode(1);
        expect(graph.size).toEqual(1);
        expect(graph.map.size).toEqual(1);
        expect(graph.map.get(1)).toBeDefined();
    });
    it('should An edge can be successfully added to the graph', () => {
        graph.addNode(2);
        graph.addNode(0);
        graph.addEdge(0, 2);
        expect(graph.map.get(0).length).toBe(1);
        graph.addEdge(0, 1);
        expect(graph.map.get(0).length).toBe(2);
    });
    it(' A collection of all nodes can be properly retrieved from the graph', () => {
        graph.addNode(3)
        graph.addNode(4)
        graph.addNode(5)
        const arr = graph.getNodes();

        expect(arr.length).toEqual(6);
        expect(arr[0]).toEqual([1, []])
        expect(arr[1]).toEqual([2, []])
    });
    it('All appropriate neighbors can be retrieved from the graph', () => {
        graph.addEdge(1, 3, 4);
        graph.addEdge(2, 3, 20);
        graph.addEdge(2, 4, 16);
        graph.addEdge(3, 5, 18);
        graph.addEdge(4, 5, 2);
        const neighbors = graph.getAdjacent(2)
        expect(neighbors.length).toEqual(2);
        expect(graph.getAdjacent(4)).toEqual([{ node: 5, weight: 2 }]);
    });
    it('Neighbors are returned with the weight between nodes included', () => {
        expect(graph.getAdjacent(3)[0].weight).toEqual(18);
        expect(graph.getAdjacent(4)[0].weight).toEqual(2);
    });
    it('The proper size is returned, representing the number of nodes in the graph', () => {
        expect(graph.size).toEqual(6);
    });
    it('A graph with only one node and edge can be properly returned', () => {
        const graph2 = new Graph();
        graph2.addNode(1);
        graph2.addEdge(1, 1, 5);
        expect(graph2.size).toEqual(1);
        expect(graph2.getNodes()[0]).toEqual([1, [{ node: 1, weight: 5 }]]);
        expect(graph2.getAdjacent(1)).toEqual([{ node: 1, weight: 5 }]);
    });
    it('An empty graph properly returns null', () => {
        const graph3 = new Graph();
        expect(graph3.getNodes()).toEqual(null)
    });
});