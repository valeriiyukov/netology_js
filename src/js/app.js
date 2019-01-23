'use strict';
let priceList = [200, 550, 4000, 23, 58, 5000, 485, 711];
let bonus = 5;
let minPrice = 10000;

function calculateBonus(price, bonus, minPrice, summ = 0) {
    for (let value of price) {
        summ += value;
    }
    
    if (summ >= minPrice) {
        let totalBonus = Math.floor(summ / 100 * bonus);
        return totalBonus;
    } else {
        return 'Бонус начисляется только при покупке свыше 10 000 игровых баллов'
    }
}

document.getElementById("bonus").innerHTML = calculateBonus(priceList, bonus, minPrice);
