'use strict';

class VigenèreCipher {
  constructor(key, alphabet) {
    this._key = key;
    this._alphabet = alphabet;
    this._alphaLen = alphabet.length;
  }

  _getGamma(keyWord, textLen) {
    let gamma = '';
    let counter = 0;
    for (let i = 0; i < textLen; i++) {
      gamma += keyWord[counter];
      counter++;
      if (counter >= keyWord.length) counter = 0;
    }
    return gamma;
  }

  _transform(input, isDecode) {
    const gamma = this._getGamma(this._key, input.length);
    let result = '';

    for (let i = 0; i < input.length; i++) {
      const inputIndex = this._alphabet.indexOf(input[i]);
      const gammaIndex = this._alphabet.indexOf(gamma[i]);
      const resultIndex = isDecode ?
        (inputIndex - gammaIndex + this._alphaLen) % this._alphaLen :
        (inputIndex + gammaIndex) % this._alphaLen;

      result += inputIndex === -1 ? input[i] : this._alphabet[resultIndex];
    }
    return result;
  }

  encode(text) {
    return this._transform(text, false);
  }

  decode(text) {
    return this._transform(text, true);
  }
}

const c = new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz');
console.log(c.encode('waffles'));
console.log(c.decode('laxxhsj'));
