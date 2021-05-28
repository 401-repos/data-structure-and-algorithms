'use strict';

const {
    Queue,
    Node
} = require('../../stacks-and-queues');


class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
}

class AnimalShelter {
    constructor() {
        this.cats = new Queue();
        this.dogs = new Queue();
    }
    enqueue(animal) {
        if (animal.type == 'cat') {
            this.cats.enqueue(animal);
        } else if (animal.type == 'dog') {
            this.dogs.enqueue(animal);
        } else {
            throw new Error('Animal type is not in the list.')
        }
        return this;
    }
    dequeue(pref) {
        if (pref == 'cat') {
            return this.cats.dequeue();
        } else if (pref == 'dog') {
            return this.dogs.dequeue();
        } else {
            return null;
        }
    }
}
module.exports = {
    Animal,
    AnimalShelter
}