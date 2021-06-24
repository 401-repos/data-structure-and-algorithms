# Graphs
<!-- Short summary or background information -->
Graphs ar non-linear data structure used in many applications like Maps and social media networks. It is very efficient because it solves many problems in short time and less space resources. There are many types of graphs, cyclic, acyclic, directed, undirected, complete, and incomplete graphs. Each one has its own properties and structure and different applications.

## Challenge
<!-- Description of the challenge -->
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

* add node
* add edge
* get nodes
* get neighbors
* size

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I implemented the graph using a map data structure. It is very fast and efficient data structure to store mapped values. Each slot contains a key that represent a vertex, and an array of edges.

* add node: Space Complexity: O(1) , Time Complexity: O(1)
* add edge: Space Complexity: O(n) , Time Complexity: O(1)
* get nodes: Space Complexity: O(n) , Time Complexity: O(n)
* get neighbors: Space Complexity: O(e) , Time Complexity: O(1)
* size: Space Complexity: O(1) , Time Complexity: O(1)

## API
<!-- Description of each method publicly available in your Graph -->
1. `Graph.addNode(value)`
  -Arguments: value
  -Returns: The added node
  -Add a node to the graph
2. `Graph.addEdge(from, to, weight)`
  -Arguments: 2 nodes to be connected by the edge, weight (optional)
  -Returns: nothing
  -Adds a new edge between two nodes in the graph
  -If specified, assign a weight to the edge
  -Both nodes should already be in the Graph
3. `Graph.getNodes()`
  -Arguments: none
  -Returns all of the nodes in the graph as a collection (set, list, or similar)
4. `Graph.getAdjacent(node)`
  -Arguments: node
  -Returns a collection of edges connected to the given node
  -Include the weight of the connection in the returned collection
5. `Graph.size`;
  -Arguments: none (property)
  -Returns the total number of nodes in the graph
