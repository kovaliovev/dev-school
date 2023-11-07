'use strict';
// First task
//
// If we list all the natural numbers below 10 that are multiples of 3 or
// 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3
// or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

const isMultiple = (num, divider) => num % divider === 0;

const getSumOfMultiples = (endNum, dividers) => {
  if (endNum < 3) return 0;
  let result = 0;

  for (let i = 1; i < endNum; i++) {
    for (const divider of dividers) {
      if (isMultiple(i, divider)) {
        result += i;
        break;
      }
    }
  }
  return result;
};

const getSumOfMultiples3and5 = (endNum) => getSumOfMultiples(endNum, [3, 5]);

console.log(getSumOfMultiples3and5(10));
console.log(getSumOfMultiples3and5(100));
console.log(getSumOfMultiples3and5(-1));
