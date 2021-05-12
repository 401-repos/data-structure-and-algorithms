'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.head != null) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
    return this;
  }
  includes(val) {
    let current = this.head;
    while (current) {
      if (current.data == val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString() {
    let resultingString = '';
    let current = this.head;
    if (!current) {
      return 'NULL';
    }
    while (current) {
      resultingString += `{${current.data}} -> `;
      current = current.next;
    }
    return resultingString + 'NULL';
  }
}

module.exports = {
  Node,
  LinkedList,
};