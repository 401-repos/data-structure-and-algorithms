const {Node , LinkedList} = require('../linked-lists');

describe('Testing creating a node', () => {
  it('should create a node with null next', () => {
    let node = new Node();
    expect(node).toBeDefined();
    expect(node.next).toBe(null);
    expect(node.data).toBe(undefined);
  });
  it('should create a node with defined data', () => {
    let newNode = new Node('new');
    expect(newNode.data).toEqual('new');
  });
});
describe('linked lists', () => {
  it('should return an empty linked list', () => {
    const myList = new LinkedList();
    expect(myList.head).toBe(null);
  });
  it('should insert into the linked list', () => {
    let myList = new LinkedList();
    myList.insert('Hello World');
    expect(myList.head).toBeTruthy();
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    let myList = new LinkedList();
    myList.insert('Hello');
    myList.insert('world');
    expect(myList.head.data).toEqual('world');
    expect(myList.head.next.data).toBe('Hello');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let myList = new LinkedList();
    myList.insert('Hello');
    myList.insert('world');
    myList.insert('Hello');
    expect(myList.includes('Hello')).toBeTruthy();
    expect(myList.includes('world')).toBeTruthy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let myList = new LinkedList();
    myList.insert('Hello');
    myList.insert('world');
    myList.insert('Hello');
    expect(myList.includes('hi')).toBe(false);
    expect(myList.includes('My name')).toBe(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let myList = new LinkedList();
    myList.insert('Hello');
    myList.insert('world');
    expect(myList.toString()).toBe('{world} -> {Hello} -> NULL');
    const newList = new LinkedList();
    expect(newList.toString()).toEqual('NULL');
  });

});