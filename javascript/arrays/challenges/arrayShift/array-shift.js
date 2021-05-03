'use strict';

function insertShiftArray(arr, elem) {
    const middle = Math.ceil(arr.length / 2);
    const newArr = [];
    for (let i = 0; i < arr.length + 1; i++){
        if (i === middle) {
            newArr[i] = elem
        } else if(i>middle){
            newArr[i] = arr[i - 1];
        } else {
            newArr[i] = arr[i]
        }
    }
    return newArr;
}

module.exports = {
    insertShiftArray
}