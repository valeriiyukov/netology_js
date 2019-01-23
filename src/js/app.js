'use strict';

var points = [74989, 74990, 84990, 62000, 58480, 61800];

function getMaxValue(arr) {
    var max = arr[0];
    
    for (var i = 1; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

function calcAverageValue(arr) {
    var newArr = arr.sort(compareNum);
    return (newArr[0] + newArr[1] +newArr[2]) / 3
}

function compareNum(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
}

console.log(getMaxValue(points));
console.log(calcAverageValue(points));