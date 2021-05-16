# Challenge Summary
<!-- Description of the challenge -->
Write the following methods for the Linked List class:

.append(value) which adds a new node with the given value to the end of the list

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
First we need to check if the linked list is empty or not. If it is empty, we create a new node and set the head to reference the node. If it is not empty, we traverse the list until we reach the end, and then we set the next propery of the last node to point to the new node.

BigO :

* Space = O(1).
* Time = O(n).

## Solution
<!-- Show how to run your code, and examples of it in action -->
To run the code, first you need to require the modue and create a linked list object:

```javascript

const {LinkedList} = require("LinkedList.js")
const ll = new LinkedList();

```

Next, you can append new nodes to the list using the `.append` method:

```javascript

ll.append(1);
ll.append(2);


```

Then you can run this command to log the list after changes:

```javascript

console.log(ll.toString());

```

You must see two values added to the list in order `{1 -> 2 -> null}`.
