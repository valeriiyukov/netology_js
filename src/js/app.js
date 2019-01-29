'use strict';

const points = [74989, 74990, 84990, 62000, 58480, 61800];


function calcAverageValue(arr) {
    const newArr = arr.sort(compareNum);
    const top = 3;
    let summ = 0;
    
    for (let i = 0; i <= top - 1; i++) {
        summ += newArr[i];
    }
    
    const averageValue = summ / top;
    const maxValue = newArr[0];

    return [averageValue, maxValue]
}

function compareNum(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
}


console.log('Максимальное значение: ' + calcAverageValue(points)[1]);
console.log('Среднее значение топ-3: ' + calcAverageValue(points)[0]);