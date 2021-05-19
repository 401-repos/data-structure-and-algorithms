'use strict';

const { LinkedList, zipLists } = require('../ll-zip');

describe('Testing zip Lists function', () => {
    
    it('should throw an error because the tow lists are empty', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        expect(() => zipLists(list2, list1)).toThrow();
    });
    it('should return list1 because list2 is empty', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.append(1).append(2);
        expect(zipLists(list1,list2)).toEqual(list1)
    });
    it('should return list2 because list1 is empty', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list2.append(1).append(2);
        expect(zipLists(list1,list2)).toEqual(list2)
    });
     it('should return a linkedlist zipped', () => {
         let list1 = new LinkedList();
         let list2 = new LinkedList();
         let list3 = new LinkedList();
         list1.append(1).append(3).append(5).append(7);
         list2.append(0).append(2).append(4);
         list3.append(1).append(0).append(3).append(2).append(5).append(4).append(7);
         expect(zipLists(list1, list2)).toEqual(list3);
     });
     it('should return a linkedlist zipped', () => {
         let list1 = new LinkedList();
         let list2 = new LinkedList();
         let list3 = new LinkedList();
         list2.append(1).append(3).append(5).append(7);
         list1.append(0).append(2).append(4);
         list3.append(0).append(1).append(2).append(3).append(4).append(5).append(7);
         expect(zipLists(list1, list2)).toEqual(list3);
     });
});