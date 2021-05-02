'use strict';

function reverseArray(array) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        newArr[index] = array[array.length - 1 - index];
    }
    return newArr;
}