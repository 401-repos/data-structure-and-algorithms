'use strict';

function mergeSort(arr){
    
}
function merge(left , right , arr){
    let i = 0;
    let k = 0;
    let j = 0;
    while(i<left.length && j < right.length){
        if(left[i] <= right[j]){
            arr[k] = left[i];
            i++;
        }else{
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    if(i == left.length){
        arr.concat(right)
    }else{
        arr.concat
    }
}