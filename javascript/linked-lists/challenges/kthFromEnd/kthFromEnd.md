# Challenge Summary
<!-- Description of the challenge -->
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process
<!-- Embedded whiteboard image -->


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I implemented the algorithm with a while loop and a target variable that represent the target value at the desired index from the end. The target will hold its position at the head of the list. With the help of counter that is initally equal to the k value and decremented each itiration, if the counter becomes zero, the target position begins to move as the current posigion moves.
BigO:

* time: O(n);
* space: O(1)

## Solution
<!-- Show how to run your code, and examples of it in action -->
Example
ll.kthFromEnd(k)
| Input ll                              | Arg k | Output    |
| ------------------------------------- | ----- | --------- |
| head -> [1] -> [3] -> [8] -> [2] -> X | 0     | 2         |
| head -> [1] -> [3] -> [8] -> [2] -> X | 2     | 3         |
| head -> [1] -> [3] -> [8] -> [2] -> X | 6     | Exception |