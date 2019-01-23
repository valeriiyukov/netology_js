'use strict';

function setProperPoint(balance) {
    let bs = balance.toString();
    let b = 'баллов';
    
    for (let value of bs) {
        if (bs.substr(-2) == 11 || bs.substr(-2) == 12 || bs.substr(-2) == 13 || bs.substr(-2) == 14) {
            b = 'баллов';
        } else if (value == 1) {
            b = 'балл';
        } else if (value > 1 && value < 5) {
            b = 'балла';
        } else {
            b = 'баллов'
        }
    }
    
    return (`Ваш балланс ${balance} ${b}`);

}

console.log(setProperPoint(523));
console.log(setProperPoint(6000));
console.log(setProperPoint(5001));
