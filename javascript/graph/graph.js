'use strict';

class Edge {
    constructor(node, weight) {
        this.node = node;
        this.weight = weight;
    }
}
class Graph {
    constructor() {
        this.size = 0;
        this.map = new Map()
    }
    addNode(value) {
        this.map.set(value, []);
        this.size++;
        return value;
    }
    addEdge(from, to, weight) {
        if (this.map.has(from) && this.map.has(to) && !this.getAdjacent(from).includes({ node: from, weight: weight })) {
            return this.map.get(from).push(new Edge(to, weight));
        }
        throw new Error("Either Values does not exist in the Graph")
    }
    getNodes() {
        const list = this.map.entries();
        const arr = [];
        for (let [key, value] of list) {
            arr.push([key, value]);
        }
        return arr.length? arr:null;
    }
    getAdjacent(node) {
        return this.map.get(node);
    }
}


// const graph = new Graph()
// graph.addNode(0)
// graph.addNode(1)
// graph.addNode(2)
// graph.addNode(3)
// graph.addNode(4)
// graph.addNode(5)

// graph.addEdge(0,2)
// graph.addEdge(1,3)
// graph.addEdge(2,3)
// graph.addEdge(2,4)
// graph.addEdge(3,5)
// graph.addEdge(4,5)

// // console.table(graph.map.values())
// for(let [key , val] of graph.map){
//     console.log(key, val);
// }

module.exports = { Graph };