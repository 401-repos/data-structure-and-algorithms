'use strict';
const {BinaryTree , Node} = require('../../../tree/tree')
const {HashTable} = require('../../hashtable')
function treeIntersection(bt1 , bt2){
    const table = new HashTable(1024);
    const arr = [];
    const t1Root = bt1.root;
    const t2Root = bt2.root;
    const traverse1 = (root)=>{
        if(root.left){
            traverse1(root.left);
        }
        if(root.right){
            traverse1(root.right);
        }
        if(!table.contains(root.val.toString())){
            table.set(root.val.toString(),root.val.toString());
        }
    }
    traverse1(t1Root);
    const finder = (arr,num)=>{
        for(let i =0 ; i < arr.length ; i++){
            if(arr[i] === num){
                return true;
            }
        }
        return false;
    }
    const traverse2 = (root)=>{
        if(table.contains(root.val.toString()) && !finder(arr, root.val)){
            arr[arr.length] = root.val;
        }
        if(root.left){
            traverse2(root.left);
        }
        if(root.right){
            traverse2(root.right)
        }
    }
    traverse2(t2Root)
    return arr;
}

module.exports = {treeIntersection};
