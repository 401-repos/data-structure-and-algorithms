'use strict';

const { Graph } = require('../graphBreadthFirst/graph-breadth-first');

Graph.prototype.depthFirstTraverse = function () {
    const done = new Set();
    const output = [];
    const entry = this.map.keys().next().value;
    if (entry == undefined || entry == null) {
        throw new Error("No vertices in the graph")
    }
    const traverse = (vertex) => {
        if (done.has(vertex)) {
            return;
        }
        done.add(vertex);
        output[output.length] = vertex
        const adj = this.getAdjacent(vertex)
        if (this.getAdjacent(vertex).length) {
            for (let i = 0; i < adj.length; i++) {
                traverse(adj[i].node)
            }
        }
    }
    traverse(entry);
    return output;
}

module.exports = { Graph }