'use strict';
// Sixth task
//
// Your task is to make a function that can take any non-negative integer
// as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

const getNumsArrayFromStr = (strOfNums) => {
  const result = [];
  for (const item of strOfNums) {
    result.push(parseInt(item, 10));
  }
  return result;
};

const bubbleSort = (numbers) => {
  const result = [...numbers];
  let isSorted = false;
  let len = result.length - 1;
  let temp = 0;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < len; i++) {
      const curr = result[i];
      const next = result[i + 1];

      if (curr < next) {
        temp = next;
        result[i + 1] = curr;
        result[i] = temp;
        isSorted = false;
      }
    }
    len--;
  }
  return result;
};

const rearrangeNum = (num) => {
  const strOfNums = num.toString();
  const numbers = getNumsArrayFromStr(strOfNums);
  const sortedNumbers = bubbleSort(numbers);
  const rearrangedStrOfNums = sortedNumbers.join('');
  return parseInt(rearrangedStrOfNums, 10);
};

console.log(rearrangeNum(42145));
console.log(rearrangeNum(145263));
console.log(rearrangeNum(123456789));
console.log(rearrangeNum(12));
