# Challenge Summary
<!-- Description of the challenge -->
Write a breadth first traverse on binary tree. Input nothing. Return an array of the values in the trees using the breadth first traverrsing.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![Max-Tree](../../../../assets/breadthfirst.jpegg)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Using a queue, we start by enqueing the root of the tree. In a while loop 4, We then check the front of the queue. If there was a front, we push its value to an empty array. We then check the front of the queue, if there was a left node, we enqueue the node to the queue, if there was a right node to the queue also. Then we remove the front from the queue and loop again. When the loop ends, we return the array.

Big O:

* Space: O(n).
* Time: O(n)

## Solution
<!-- Show how to run your code, and examples of it in action -->
Using the BinaryTree. Create a new instance of the class.

```javascript

const {BinarySearchTree} = require('../../breadth-first-traverse.js');
let tree = new BinaryTree(5);

```

Insert some new nodes to the tree:

```javascript

tree.add(11).add(100).add(30)

```

Log the max value with this method:

```javascript

console.log(tree.bft());

```

This should return an array with these values in order: [5,11,30,100]
