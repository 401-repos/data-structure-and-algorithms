'use strict';

const { Graph } = require('../depth-first-traverse');

describe('Graph depth first traverse', () => {
    const graph = new Graph();
    graph.addNode(3);
    graph.addNode(1);
    graph.addNode(0);
    graph.addNode(2);
    graph.addNode(5);
    graph.addNode(4);
    graph.addEdge(0, 2);
    graph.addEdge(0, 1);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 5);


    const graphTest = new Graph();
    graphTest.addNode('Pandora');
    graphTest.addNode('Arendelle');
    graphTest.addNode('Metroville');
    graphTest.addNode('Monstroplolis');
    graphTest.addNode('Narnia');
    graphTest.addNode('Naboo');
    graphTest.addEdge('Pandora', 'Arendelle', 150);
    graphTest.addEdge('Arendelle', 'Pandora', 150);
    graphTest.addEdge('Pandora', 'Metroville', 82);
    graphTest.addEdge('Metroville', 'Pandora', 82);
    graphTest.addEdge('Arendelle', 'Metroville', 99);
    graphTest.addEdge('Metroville', 'Arendelle', 99);
    graphTest.addEdge('Arendelle', 'Monstroplolis', 42);
    graphTest.addEdge('Monstroplolis', 'Arendelle', 42);
    graphTest.addEdge('Metroville', 'Narnia', 37);
    graphTest.addEdge('Narnia', 'Metroville', 37);
    graphTest.addEdge('Metroville', 'Naboo', 26);
    graphTest.addEdge('Naboo', 'Metroville', 26);
    graphTest.addEdge('Metroville', 'Monstroplolis', 105);
    graphTest.addEdge('Monstroplolis', 'Metroville', 105);
    graphTest.addEdge('Monstroplolis', 'Naboo', 73);
    graphTest.addEdge('Naboo', 'Monstroplolis', 73);
    graphTest.addEdge('Narnia', 'Naboo', 250);
    graphTest.addEdge('Naboo', 'Narnia', 250);

    const myGraph2 = new Graph();
    myGraph2.addNode('a');
    myGraph2.addNode('b');
    myGraph2.addNode('c');
    myGraph2.addNode('d');
    myGraph2.addNode('e');
    myGraph2.addNode('f');
    myGraph2.addNode('h');
    myGraph2.addNode('g');
    myGraph2.addEdge('a', 'b');
    myGraph2.addEdge('a', 'd');
    myGraph2.addEdge('b', 'a');
    myGraph2.addEdge('b', 'd');
    myGraph2.addEdge('b', 'c');
    myGraph2.addEdge('c', 'b');
    myGraph2.addEdge('c', 'g');
    myGraph2.addEdge('d', 'a');
    myGraph2.addEdge('d', 'b');
    myGraph2.addEdge('d', 'e');
    myGraph2.addEdge('d', 'h');
    myGraph2.addEdge('d', 'f');
    myGraph2.addEdge('e', 'd');
    myGraph2.addEdge('f', 'd');
    myGraph2.addEdge('f', 'h');
    myGraph2.addEdge('h', 'f');
    myGraph2.addEdge('h', 'd');
    myGraph2.addEdge('g', 'c');
    it('should return a part from the list in directed maps', () => {
        expect(graph.depthFirstTraverse()).toEqual([3,5])
    });
    it('should return a list of all elements in each graph', () => {
        expect(graphTest.depthFirstTraverse()).toEqual([
            'Pandora',
            'Arendelle',
            'Metroville',
            'Narnia',
            'Naboo',
            'Monstroplolis'
          ])
        expect(myGraph2.depthFirstTraverse()).toEqual([
            'a', 'b', 'd',
            'e', 'h', 'f',
            'c', 'g'
          ])
    });
    it('should throw an error on empty graph traverse', () => {
        let empty = new Graph()
        expect(()=>{
            empty.depthFirstTraverse()
        }).toThrow()
    });
});