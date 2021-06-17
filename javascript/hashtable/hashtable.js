'use strict';

const {LinkedList} = require('../linked-lists/linked-lists')

class HashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
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
        this.table[hashed].insert({[key]:value})
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

module.exports = {HashTable};