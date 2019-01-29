'use strict';
const priceList = [200, 550, 4000, 23, 58, 5000, 485, 711];
const bonus = 5;
const minPrice = 10000;

const calculateBonus = (price, bonus, minPrice, summ = 0) => {
    for (let value of price) {
        summ += value;
    }
    console.log(summ)
    if (summ >= minPrice) {
        let totalBonus = Math.floor((summ - minPrice) / 100 * bonus);
        return totalBonus;
    } else {
        return 'Бонус начисляется только при покупке свыше 10 000 игровых баллов'
    }
}

console.log(calculateBonus(priceList, bonus, minPrice));
