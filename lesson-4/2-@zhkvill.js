'use strict';

class Vector {
  constructor(cords) {
    this._cords = cords;
    this._length = cords.length;
  }

  add(addingVector) {
    if (addingVector._length !== this._length) {
      throw new Error('You can not add vectors with different length!');
    }
    const sumCords = [];
    for (let i = 0; i < this._length; i++) {
      sumCords[i] = this._cords[i] + addingVector._cords[i];
    }
    return new Vector(sumCords);
  }

  subtract(subtractingVector) {
    if (subtractingVector._length !== this._length) {
      throw new Error('You can not subtract vectors with different length!');
    }
    const diffCords = [];
    for (let i = 0; i < this._length; i++) {
      diffCords[i] = this._cords[i] - subtractingVector._cords[i];
    }
    return new Vector(diffCords);
  }

  dot(dottingVector) {
    if (dottingVector._length !== this._length) {
      throw new Error('You can not dot vectors with different length!');
    }
    let result = 0;
    for (let i = 0; i < this._length; i++) {
      result += this._cords[i] * dottingVector._cords[i];
    }
    return result;
  }

  norm() {
    const sum = this._cords.reduce((a, b) => a + b ** 2, 0);
    return Math.sqrt(sum);
  }

  toString() {
    return `(${this._cords})`;
  }

  equals(equalingVector) {
    return this.toString() === equalingVector.toString();
  }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.toString() === '(1,2,3)');
console.log(a.add(b).equals(new Vector([4, 6, 8])));
console.log(a.add(b));      // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b));      // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c));      // throws an error
