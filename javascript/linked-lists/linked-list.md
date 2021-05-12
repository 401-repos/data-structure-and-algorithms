# Singly Linked List
<!-- Short summary or background information -->
Data structure use nodes that cntains the data and reference to the next node in the list.

## Challenge
<!-- Description of the challenge -->
Write an implementation to the linked list data structure with many methods like insert, includes, and to string.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used simple implementaion. For the node, I implemented a class with two properties, the node data and the next node reference.
For the linked list I created a class with only the head reference to the first node in the list.

## API
<!-- Description of each method publicly available to your Linked List -->
List.insert(data) creates a node with data equal to data, and insert it at the beginning of the list.
List.includes(data) searches for the data if it exists in the node return true if it is there, false if not.
List.toString() returns a string represinting all data values in the list.
