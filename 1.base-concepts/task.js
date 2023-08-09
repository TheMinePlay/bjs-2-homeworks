"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = 0;
  d = b ** 2 - 4 * a * c;
  if(d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  } else if(d == 0) {
    arr[0] = -b/(2*a);
  };
  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent /= 100;
    let monthlyPercent = percent / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
    return Math.round(monthlyPayment * 100 * countMonths) / 100;
}