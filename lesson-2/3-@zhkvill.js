'use strict';
// Third task
//
// Your job is to group the words in anagrams.
// What is an anagram ?
// star and tsar are anagram of each other because you can rearrange the
// letters for star to obtain tsar.
//
// Example
// A typical test could be :
// // input
// groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]

const sortWord = (word) => {
  const letters = [...word];

  let isSorted = false;
  let len = letters.length - 1;
  let temp = '';

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < len; i++) {
      const curr = letters[i];
      const next = letters[i + 1];

      if (curr > next) {
        temp = next;
        letters[i + 1] = curr;
        letters[i] = temp;
        isSorted = false;
      }
    }
    len--;
  }
  return letters.join('');
};

const groupAnagrams = (anagrams) => {
  const groupedAnagramsObj = {};
  for (const anagram of anagrams) {
    const keyWord = sortWord(anagram);
    groupedAnagramsObj[keyWord] = groupedAnagramsObj[keyWord] || [];
    groupedAnagramsObj[keyWord].push(anagram);
  }
  return Object.values(groupedAnagramsObj);
};

console.log(groupAnagrams(['tsar', 'rat', 'tar', 'star', 'tars', 'cheese']));
