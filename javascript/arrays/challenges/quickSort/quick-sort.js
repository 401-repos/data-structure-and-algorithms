'use strict';

function quickSort(arr, left, right) {
    if (left < right) {
        let position = partition(arr, left, right);
        quickSort(arr, left, position - 1);
        quickSort(arr, position + 1, right);
    }
}
function partition(arr, left, right) {
    let pivot = arr[left];
    let i = left, j = right;
    while (i < j) {
        do {
            i++;
        } while (arr[i] <= pivot);
        do {
            j--;
        } while (arr[j] > pivot)
        if (i < j) {
            swap(arr, i, j)
        }
    }
    swap(arr, left, j);
    return j;
}

function swap(arr, i, low) {
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
}

module.exports = quickSort;

let array1 = [8, 4, 23, 42, 16, 15];
quickSort(array1,0,array1.length);
