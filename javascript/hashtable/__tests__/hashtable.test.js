'use strict';

const {HashTable} = require('../hashtable');

describe('Hashtables', () => {
    const myTable = new HashTable(20);
    it('should Adding a key/value to your hashtable results in the value being in the data structure', () => {
        myTable.set('name', 'omar');
        myTable.set('age',28);
        const arr = []
        for(let elem of myTable.table){
            if(elem){
                arr.push(elem)
            }
        }
        expect(arr.length).toEqual(2);
    });
    it('should Retrieving based on a key returns the value stored', () => {
        expect(myTable.get("name")).toEqual({"name":"omar"})
        expect(myTable.get("age")).toEqual({"age":28})
    });
    it('should Successfully returns null for a key that does not exist in the hashtable', () => {
        expect(myTable.get("does Not Exist")).toEqual(null)
        expect(myTable.get("hello")).toEqual(null)
    });
    it('should Successfully handle a collision within the hashtable', () => {
        myTable.set("amen","Karam");
        myTable.set("ega","I don;t know");
        const arr = []
        for(let elem of myTable.table){
            if(elem){
                arr.push(elem)
            }
        }
        expect(arr.length).toEqual(2);
    });
    it('should Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        expect(myTable.get('amen')).toEqual({"amen":"Karam"})
        expect(myTable.get('ega')).toEqual({"ega":"I don;t know"})
    });
    it('should Successfully hash a key to an in-range value', () => {
       expect(myTable.hash("abcdefghijklmnopqrstuvwxyz")).toBeLessThan(20);
       expect(myTable.hash("abcdefghijklmnopqrstuvwxyz")).toBeGreaterThan(0);
    });    
});