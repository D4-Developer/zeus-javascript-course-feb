'use strict';
// #1
// const calcAverage = (v1, v2, v3) => (v1 + v2 + v3) / 3;

// function checkWinner(avgDolphins, avgKoalas) {
//     console.log(avgDolphins, avgKoalas);
//     if (avgDolphins >= 2 * avgKoalas)
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     else if (avgKoalas >= 2 * avgDolphins)
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// }

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// checkWinner(avgDolphins, avgKoalas);

// #2
// function calcTip(bill) {
//         return bill >= 50 && bill <= 300 
//             ? bill * 0.15 : bill * 0.20;
// }
// const bills = [100, 125, 555, 44];
// const tips = [];
// const totals = [];
// bills.forEach(bill => {
//     const tip = calcTip(bill);
//     tips.push(tip);
//     totals.push(tip + bill);
// });
// console.log(tips)
// console.log(totals)
