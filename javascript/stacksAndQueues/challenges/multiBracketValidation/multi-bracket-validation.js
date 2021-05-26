'use strict';
const {
    Stack
} = require('../../stacks-and-queues');


function multiBracketValidation(input) {
    if (!input) {
        throw new Error('You should provide String input')
    }
    const bracketsStack = new Stack();
    let last = '';
    for (let letter of input) {
        if (/[\{\[\(]/.test(letter)) {
            bracketsStack.push(letter)
            last = letter;
        } else if ((letter == '}' && last == '{') || (letter == ')' && last == '(') || (letter == ']' && last == '[')) {
            bracketsStack.pop()
            last = bracketsStack.isEmpty()?  '' : bracketsStack.peek().data;
        } else if (letter == '}' || letter == ']' || letter == ')') {
            return false;
        }

    }
    return bracketsStack.isEmpty();
}

module.exports = {
    multiBracketValidation
}