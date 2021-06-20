export default function shortUniqueId(this: any) {
  // This provides collision-space of ~57B.
  this.DEFAULT_RANDOM_ID_LEN = 6;

  // ID Generator Dictionary.
  // currently uses only alphabets and digits.
  this.DICT_RANGES = {
    digits: [48, 58],
    lowerCase: [97, 123],
    upperCase: [65, 91],
  };

  // Generate Dictionary.
  this.dict = [];

  /**
   * Check if environment has `console`, if so pass arguments along to its `log` function.
   * Logging is optionally enabled by passing `debug=true` during instantiation.
   * @param {Object} args Any list of objects.
   */
  this.log = function log(...args: any[]) {
    args[0] = `[short-unique-id] ${args[0]}`;
    /* eslint-disable no-console */
    if (this.debug === true) {
      if (typeof console !== 'undefined' && console !== null) {
        return console.log(...args);
      }
    }
    return undefined;
  };

  /**
   * Returns generator's internal dictionary.
   */
  this.getDict = function getDict() {
    return this.dict;
  };

  /**
   * Generates UUID based on internal counter that's incremented after each ID generation.
   */
  this.sequentialUUID = function sequentialUUID() {
    let counterDiv;
    let counterRem;
    let id;
    id = '';
    counterDiv = this.counter;

    while (true) {
      counterRem = counterDiv % this.dictLength;
      counterDiv = parseInt(counterDiv / this.dictLength, 10);
      id += this.dict[counterRem];
      if (counterDiv === 0) {
        break;
      }
    }
    this.counter += 1;
    return id;
  };

  /**
   * Generates UUID by creating each part randomly.
   * @param {Integer} uuidLength Desired UUID length.
   */
  this.randomUUID = function randomUUID(uuidLength: number | null) {
    let id;
    let randomPartIdx;
    let _j;
    if (uuidLength === null || typeof uuidLength === 'undefined') {
      uuidLength = this.DEFAULT_RANDOM_ID_LEN;
    }
    if (
      uuidLength === null ||
      typeof uuidLength === 'undefined' ||
      uuidLength < 1
    ) {
      throw new Error('Invalid UUID Length Provided');
    }

    // Generate random ID parts from Dictionary.
    let idIndex;
    id = '';
    for (
      idIndex = _j = 0;
      uuidLength >= 0 ? _j < uuidLength : _j > uuidLength;
      idIndex = uuidLength >= 0 ? ++_j : --_j
    ) {
      randomPartIdx =
        parseInt(Math.random() * this.dictLength) % this.dictLength;
      id += this.dict[randomPartIdx];
    }

    // Return random generated ID.
    return id;
  };

  /* eslint-disable */
      this.dictIndex = this._i = 0;
      let rangeType;
      for (rangeType in this.DICT_RANGES) {
        this.dictRange = this.DICT_RANGES[rangeType];
        this.lowerBound = this.dictRange[0], this.upperBound = this.dictRange[1];
        for (this.dictIndex = this._i = this.lowerBound; this.lowerBound <= this.upperBound ? this._i < this.upperBound : this._i > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? ++this._i : --this._i) {
          this.dict.push(String.fromCharCode(this.dictIndex));
        }
      }
      /* eslint-enable */

  // Shuffle Dictionary for removing selection bias.
  this.dict = this.dict.sort(() => Math.random() <= 0.5);

  // Cache Dictionary Length for future usage.
  this.dictLength = this.dict.length;

  // Resets internal counter.

  this.counter = 0;
  this.log(`Generator created with Dictionary Size ${this.dictLength}`);
}
