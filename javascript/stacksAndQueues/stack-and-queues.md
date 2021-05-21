# Stacks and Queues
<!-- Short summary or background information -->
Stack and Queues using singly linked list implementation. Stack is a data structure of consequtive data and we can add to the top of the data and only remove from the top. Which means it follows the LIFO principle Last In First Out. Queues is a data structure of queued data that follows the FIFO role; First In First Out. These data structure can be built on top of any of the physical data structure implementaions Arrays and Linked Lists.

## Challenge
<!-- Description of the challenge -->
### Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* Should raise exception when called on empty stack
* Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
* Should raise exception when called on empty stack
* Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

### Create a Queue class that has a front property. It creates an empty Queue when instantiated.

* This object should be aware of a default empty value assigned to front when the queue is created.
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* Should raise exception when called on empty queue
* Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
* Should raise exception when called on empty queue
* Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
*Be sure to follow your languages best practices for naming conventions.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Dealing with stack is easy since we pop data from the place where we add the data. Queues is a bit different, I used two references; one for the front node and one for the rear node.

Big O:

1. Space: O(n).
2. Time: O(n).

## API
<!-- Description of each method publicly available to your Stack and Queue-->
* `.isEmpty()` Return boolean. Takes no args. Returns true if the stack or the queue is empty, false otherwise.
* `.peek()` Peeks the top node in a stack or the front element in a queue. Takes no arguments and return the node.
* `Stack.push(val)` Takes a value arg. Creates a node and push it to the top of the stack. Returns the stack.
* `Stack.pop()` Takes no args. It removes the node that is lsat added at the top of the stack and returns it.
* `Queue.enqueue(val)` Creates a new node and add it to the end of the queue. It takes a data argument and returns the queue.
* `Queue.dequeue()` It deletes the node from the front of the queue. It takes no arguements and return the dequeued node.
