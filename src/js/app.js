'use strict';

const formatPoints = (strings, balance) => {
    const bs = balance.toString();
    const yourBalance = strings[0];
    let b = strings[1]
    
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
    
    return `${yourBalance}${balance} ${b}`;

}

const output = (points) => formatPoints`Ваш баланс ${points}баллов`;

console.log(output(523));
console.log(output(6000));
console.log(output(5001));
