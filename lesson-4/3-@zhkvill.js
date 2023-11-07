'use strict';

class GameOptions {
  constructor() {
    this._ranks = [
      'Pushover',
      'Novice',
      'Fighter',
      'Warrior',
      'Veteran',
      'Sage',
      'Elite',
      'Conqueror',
      'Champion',
      'Master',
      'Greatest',
    ];
    this._minLevel = 1;
    this._maxLevel = 100;
    this._minExp = 100;
    this._maxExp = 10000;
  }
}

class Warrior {
  constructor() {
    this._options = new GameOptions();
    this._exp = this._options._minExp;
    this._level = this._options._minLevel;
    this._rankNum = 0;
    this._achievements = [];
  }

  _updateExp(exp) {
    const newExp = this._exp + exp;
    if (this._exp < this._options._maxExp) {
      this._exp = newExp > this._options._maxExp ?
        this._options._maxExp :
        newExp;
      this._updateLevel();
    }
  }

  _updateLevel() {
    if (this._level < this._options._maxLevel) {
      this._level = Math.floor(this._exp / 100);
      this._updateRankNum();
    }
  }

  _updateRankNum() {
    this._rankNum = Math.floor(this.level() / 10);
  }

  level() {
    return this._level;
  }

  experience() {
    return this._exp;
  }

  rank() {
    return this._options._ranks[this._rankNum];
  }

  achievements() {
    return this._achievements;
  }

  battle(enemyLevel) {
    if (enemyLevel < this._options._minLevel ||
      enemyLevel > this._options._maxLevel) {
      return 'Invalid level';
    }

    const levelDiff = enemyLevel - this._level;
    const enemyRankNum = Math.floor(enemyLevel / 10);

    if (enemyRankNum > this._rankNum && levelDiff >= 5) {
      return 'You\'ve been defeated';
    }
    if (levelDiff >= 1) {
      this._updateExp(20 * levelDiff * levelDiff);
      return 'An intense fight';
    }
    if (levelDiff === 0) {
      this._updateExp(10);
      return 'A good fight';
    }
    if (levelDiff === -1) {
      this._updateExp(5);
      return 'A good fight';
    }
    if (levelDiff <= -2) {
      return 'Easy fight';
    }
  }

  training([description, addExp, requiredLevel]) {
    if (this._level >= requiredLevel) {
      this._updateExp(addExp);
      this._achievements.push(description);
      return description;
    } else {
      return 'Not strong enough';
    }
  }
}

const Goku = new Warrior();
console.log(Goku);
