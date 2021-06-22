'use strict';

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class KTreeNode {
    constructor(val){
        this.value = val;
        this.child = null;
        this.sibling = null;
    }
}

class BinaryTree{
    constructor(val) {
        if (!val) {
            throw new Error("You have to pass a value to initialize the tree");
        }
        this.root = new Node(val);
        this.count = 1;
    }

    preOrder() {
        const ret = [];
        let traverse = root => {
            ret.push(root.val);
            if (root.left) {
                traverse(root.left);
            }
            if (root.right) {
                traverse(root.right);
            }
        }
        traverse(this.root);
        return ret;
    }
    inOrder() {
        const ret = [];
        let traverse = root => {
            if (root.left) {
                traverse(root.left);
            }
            ret.push(root.val);
            if (root.right) {
                traverse(root.right);
            }
        }
        traverse(this.root);
        return ret;
    }
    postOrder() {
        const ret = [];
        let traverse = root => {
            if (root.left) {
                traverse(root.left);
            }
            if (root.right) {
                traverse(root.right);
            }
            ret.push(root.val);
        }
        traverse(this.root);
        return ret;
    }
}

class BinarySearchTree extends BinaryTree{
    add(val) {
        let newNode = new Node(val);
        let current = this.root;
        while (current) {
            if (current.val > newNode.val) {
                if (current.left) {
                    current = current.left;
                } else {
                    this.count++;
                    current.left = newNode;
                    break;
                }
            } else if (current.val < newNode.val) {
                if (current.right) {
                    current = current.right;
                } else {
                    this.count++;
                    current.right = newNode;
                    break;
                }
            } else {
                throw new Error(`Node with value ${val} already exists in the tree!`);
            }
        }
        return this;
    }
    contains(val) {
        let current = this.root;
        while (current) {
            if (current.val == val) {
                return true;
            }
            if (current.val > val) {
                current = current.left;
            } else {
                current = current.right;
            }

        }
        return false;
    }
}


class KTree{
    constructor(val){
        this.root = new KTreeNode(val)
    }
}

module.exports = {BinaryTree,BinarySearchTree, KTree, KTreeNode ,Node};