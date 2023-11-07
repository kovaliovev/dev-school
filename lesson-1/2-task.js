'use strict';
// Second task
//
// Your task, is to calculate the minimal number of moves to win the game
// "Towers of Hanoi", with given number of disks.
//
// Towers of Hanoi is a simple game consisting of three rods, and a number
// of disks of different sizes which can slide onto any rod. The puzzle
// starts with the disks in a neat stack in ascending order of size on one
// rod, the smallest at the top, thus making a conical shape.
//
// The objective of the puzzle is to move the entire stack to another rod,
// obeying the following simple rules:
//
// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and
// placing it on top of another stack i.e. a disk can only be moved if it
// is the uppermost disk on a stack.
// No disk may be placed on top of a smaller disk.

//const roflanSolve = (n) => 2 ** n - 1;

const solveHanoi = (n, startRod, endRod, tempRod, counter) => {
  if (n === 1) {
    //console.log(`Move ${n} disk from ${startRod} to ${endRod}`);
    counter.steps++;
    return;
  }
  solveHanoi(n - 1, startRod, tempRod, endRod, counter);
  //console.log(`Move ${n} disk from ${startRod} to ${endRod}`);
  counter.steps++;
  solveHanoi(n - 1, tempRod, endRod, startRod, counter);
};
const countHanoiSteps = (numOfDisks) => {
  const counter = { steps: 0 };
  solveHanoi(numOfDisks, 'First', 'Second', 'Third', counter);
  return counter.steps;
};

for (let i = 1; i <= 10; i++) {
  console.log(countHanoiSteps(i));
}
