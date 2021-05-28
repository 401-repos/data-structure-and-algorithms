# Trees
<!-- Short summary or background information -->
Trees are non-liner data structure consists of linked nodes. Each node can be a parent or a child. Trees has a root that holds the root element of the tree. Binary trees are trees where nodes can only have maximum of two children; left and right child.

## Challenge
<!-- Description of the challenge -->
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a BinaryTree class
* Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
* Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

* Create a BinarySearchTree class
* Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
* Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
When we want to add to the tree, We have to compare the value of the new element with the values of the tree. If it was greater, we go right. If it was lesser, we go left. When we reach the end of the branch we add the element to the left or the right of the last node according to the comparison.

When we want to search whether or not the element is in the tree. We follow the same principle. We compare its value to the value of each node. If it was greater we go deep right. If it was lesser we go deep left. If it was equal, we return the true. If the loop terminated without returning any value, it means that the element is not in the tree and we return false.

When we traverse the tree, there are several approaches we can follow. Pre Order, We push then traverse left then right. In Order, we traverse left, we push then we traverse right. Post Order, We traverse right, we traverse left, then we push.

## API
<!-- Description of each method publicly available in each of your trees -->
1. `BinaryTree.proOrder()`
2. `BinaryTree.postOrder()`
3. `BinaryTree.inOrder()`
4. `BinarySearchTree.proOrder()`
5. `BinarySearchTree.inOrder()`
6. `BinarySearchTree.postOrder()`
7. `BinarySearchTree.add()`
8. `BinarySearchTree.contains()`
