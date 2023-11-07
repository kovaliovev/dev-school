'use strict';
// Sixth task
//
// Given an array arr of strings, complete the function by calculating the
// total perimeter of all the islands. Each piece of land will be marked
// with 'X' while the water fields are represented as 'O'. Consider each
// tile being a perfect 1 x 1 piece of land. Some examples for better
// visualization:
//     ['XOOXO',
//      'XOOXO',
//      'OOOXO',
//      'XXOXO',
//      'OXOOO']
// which represents:
// should return: "Total land perimeter: 24".
//
// Following input:
//   ['XOOO',
//    'XOXO',
//    'XOXO',
//    'OOXX',
//    'OOOO']
// which represents:
// should return: "Total land perimeter: 18"

const calculatePerimeter = (land) => {
  let result = 0;
  const partsCount = land.length;

  for (let i = 0; i < partsCount; i++) {
    const part = land[i];
    const fieldsCount = part.length;

    for (let j = 0; j < fieldsCount; j++) {
      const field = part[j];
      if (field === 'X') {
        if (part[j - 1] !== 'X') result++;
        if (part[j + 1] !== 'X') result++;
        if (!land[i - 1] || land[i - 1][j] !== 'X') result++;
        if (!land[i + 1] || land[i + 1][j] !== 'X') result++;
      }
    }
  }
  return result;
};

console.log(calculatePerimeter(
  ['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO']));
console.log(calculatePerimeter(
  ['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO']));
