'use strict';

const { AnimalShelter, Animal } = require('../animal-shelter');

describe('Animal Shelter', () => {
    it('should create a new AnimalShelter Object', () => {
        let shelter = new AnimalShelter();
        expect(shelter).toBeDefined();
        
    });
    it('should create a new Animal Object', () => {
        let myAnimal1 = new Animal('sally', 5, 'cat')
        let myAnimal2 = new Animal('bil', 1, 'dog')
        let myAnimal3 = new Animal('zar', 10, 'dog')
        expect(myAnimal2).toBeDefined();
        expect(myAnimal3.name).toEqual('zar')
    });
    it('should add new animal to animal lists', () => {
        let shelter = new AnimalShelter();
        let myAnimal1 = new Animal('sally', 5, 'cat')
        let myAnimal2 = new Animal('bil', 1, 'dog')
        let myAnimal3 = new Animal('zar', 10, 'dog')
        shelter.enqueue(myAnimal1)
        shelter.enqueue(myAnimal2)
        shelter.enqueue(myAnimal3)
        expect(shelter.cats.peek().data).toEqual(myAnimal1);
        expect(shelter.dogs.front.next).toBeDefined();
    });
    it('should dequee elements', () => {
        let shelter = new AnimalShelter();
        let myAnimal1 = new Animal('sally', 5, 'cat')
        let myAnimal2 = new Animal('bil', 1, 'dog')
        let myAnimal3 = new Animal('zar', 10, 'dog')
        shelter.enqueue(myAnimal1)
        shelter.enqueue(myAnimal2)
        shelter.enqueue(myAnimal3)
        expect(shelter.dequeue('cat').data).toEqual(myAnimal1);
        expect(shelter.dequeue('dog').data).toEqual(myAnimal2);
        
    });
    it('should return null if no pref determined', () => {
        let shelter = new AnimalShelter();
        let myAnimal1 = new Animal('sally', 5, 'cat')
        let myAnimal2 = new Animal('bil', 1, 'dog')
        let myAnimal3 = new Animal('zar', 10, 'dog')
        shelter.enqueue(myAnimal1)
        shelter.enqueue(myAnimal2)
        shelter.enqueue(myAnimal3)
        expect(shelter.dequeue()).toEqual(null);
    });
    it('should throw when adding no dog or cat', () => {
        let shelter = new AnimalShelter();
        let myAnimal1 = new Animal('sally', 5, 'foo')
        expect(() => {
            shelter.enqueue(myAnimal1)
        }).toThrow();
            
            
        
    });

    
});