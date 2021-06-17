// 'use strict';

// function mergeSort(arr){

// }
// function merge(left , right , arr){
//     let i = 0;
//     let k = 0;
//     let j = 0;
//     while(i<left.length && j < right.length){
//         if(left[i] <= right[j]){
//             arr[k] = left[i];
//             i++;
//         }else{
//             arr[k] = right[j];
//             j++;
//         }
//         k++;
//     }
//     if(i == left.length){
//         arr.concat(right)
//     }else{
//         arr.concat
//     }
// }


'use strict';

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = [];
    let right = [];
    for (let i = 0; i < middle; i++) {
        left[i] = array[i]
    }
    for (let i = middle; i < array.length; i++) {
        right[i - middle] = array[i];
    }
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return sort(sortedLeft, sortedRight);


}

function sort(left, right) {
    let arr = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    for (; i < left.length; i++) {
        arr[k] = left[i];
        k++
    }

    for (; j < right.length; j++) {
        arr[k] = right[j];
        k++
    }
    return arr;
}

module.exports = mergeSort;