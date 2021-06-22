'use strict';

const {LinkedList} = require('../linked-lists/linked-lists')

class HashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
        this.filled = [];
    }
    hash(key){
        let sum=0;
        for(let i =0 ; i<key.length ; i++){
            sum+=key.charCodeAt(i);
        }
        return (sum*133)%this.size;
    }
    set(key, value){
        const hashed = this.hash(key);
        if(!this.table[hashed]){
            this.table[hashed] = new LinkedList();
        }
        this.table[hashed].insert({[key]:value});
        if(!find(this.filled , hashed)){
            this.filled[this.filled.length] = hashed;
        }
        return this;
    }
    get(key){
        const hashed = this.hash(key);
        const list = this.table[hashed];
        if(list){
            let current = list.head;
            while(current){
                if(current.data[key]){
                    return current.data;
                }
                current=current.next;
            }
        }
        return null;
    }
    contains(key){
        const hashed = this.hash(key);
        const list = this.table[hashed];
        if(list){
            let current = list.head;
            while(current){
                if(current.data[key]){
                    return true;
                }
                current=current.next;
            }
        }
        return false;
    }
}
function find(arr , elem){
    for(let i=0; i <arr.length; i++){
        if(arr[i] == elem){
            return true;
        }
    }
    return false;
}
module.exports = {HashTable};