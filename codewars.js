

//6kyu-hex-class

class Hex {
  constructor(value) { this._value = value; }
  valueOf() { return this._value; }
  toString() { return '0x' + this._value.toString(16).toUpperCase(); }
  toJSON() { return this.toString(); }
  plus(other) { return new Hex(this + other); }
  minus(other) { return new Hex(this - other); }
  static parse(string) { return Number.parseInt(string, 16); }
}

//8kyu-how-good-are-you-really

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

//8kyu-century-from-year

const century = year => Math.ceil(year/100)

//7kyu-form-the-minimum

function minValue(values) {
  return +Array.from(new Set(values))
    .sort((a, b) => a - b)
    .join("");
}

//8kyu-a-wolf-in-sheeps-clothing

function warnTheSheep(queue) {
  const index=queue.indexOf('wolf')
  return index===queue.length-1?"Pls go away and stop eating my sheep"
  :`Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`
}