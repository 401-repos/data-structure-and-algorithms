'use strict';

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (end >= start) {
    let middle = Math.floor((end + start) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;